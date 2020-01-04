import React, {Component} from 'react'; 
import {Home} from 'pmvc_react_portfolio';
import {ClientRoute} from 'reshow-url'; 
import {ajaxDispatch} from 'organism-react-ajax';
import {dispatch} from 'reshow';
import ini from 'parse-ini-string';
import {nest} from 'object-nested';
import {getUrl} from 'seturl';

const themes = {
    home: Home,
};

class Index extends Component
{

    componentDidMount()
    {
        let source = getUrl('source'); 
        if (!source) {
            const url = document.location;
            const gitName = url.hostname.split('.')[0];
            source='https://raw.githubusercontent.com/'+gitName+'/.env/master/.env.view';
        }
        
        ajaxDispatch({
            type: 'ajaxGet',
            params: {
                url: source,
                callback: (json, text)=>
                {
                    let a = ini(text);
                    a = nest(a, '_'); 
                    dispatch({
                        type: 'config/set',
                        params:a
                    });
                }
            }
        });
    }

    render()
    {
        let {themePath, ...props} = this.props;
        if (!themePath) {
            themePath = 'home';
        }
        return (
            <ClientRoute
                {...props}
                themes={themes}
                themePath={themePath}
                onUrlChange={url=>handleAnchor=>goAnchorDelay=>{
                    const params = url.split('/');
                    const last = params.length-1;
                    if (params[last]) {
                        return {
                            portfolioId: params[last]
                        };
                    }
                    return {portfolioId:''};
                }}
            />
        );  
    }
};

export default Index;
