import { expect } from "chai";
import { render, act, waitFor } from "reshow-unit";

import Index from "../index";

describe("Index page test", () => {
  it("basic test", async () => {
    const wrap = render(<Index />);
    await waitFor(() => {
      act(()=>expect(wrap.html()).to.have.string("div"));
    });
  });
});
