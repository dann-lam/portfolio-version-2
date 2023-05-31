import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://www.imdb.com/name/nm4219670/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEX1xRiigg9FNwZWRQjCnBNiTwnluBbUqxR6YgxsVwqJbg2BaAwAAAAYEwKtixEJBwDIoRMRDQGnhhA2LAW6lRKQcw4nHwNcSglNPgcyKAQ9MQaRdA55YQuXeg7arxVEfIgDAAAAiElEQVR4Ae3ONQKEMAAAwRwui7v+/5mHO5RUbKSaiHi1r58kK5KkapIk6VKXIUzJEptsHBc8BfAhgDBCPQOsEcSQdMB1D8BD8kbg9cADew9SvHQDspx8DwqHfANU9QRKzGegkgzAgKp7Qj4BG3cAdPvwyVrM+c2vbVy90ZpudvnCbZSmEa/29Qd3QQxgg+pf3wAAAABJRU5ErkJggg=="
            alt="IMDB Link"
          ></img>
        </a>
        <a href="https://github.com/dann-lam">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEX///+6u711eHtaXWFMUFQkKS7j5OQwNTrx8fKRk5bV1tc+Q0esrrDIycqDhomeoaNna24OVeM5AAAA/ElEQVR4AX3T0a6EIAwE0AEY2oLr3v//2iumIaC650UfJkw1BZMQUyZzigEPShQOEhUXJlyIYaaZN1kxVOEDqXAqfCQ6nZ9j46TFRDL7fDxswNbIdBDKBgQeDIciPHwAqJcWBVBHSaQHVoVdBCD0ilVgJ+NFcaGNXUC8HeA2djsSO8Udu4TsVXeJhwx27TVA8IQHjR3a7xka0ttXBB9y9+fLCLsH+X3+DQxjGQwLGyuBSFrIZNs/cJ9vI70BKKRUzeRYkD8OxU+TUuQsPFU6em8mI9Rsg6PL09JWTNal9bWPZrYGpN4uzhLIipldA4aLsovAicSCOy0jrBj+Adb8C4ZUKU58AAAAAElFTkSuQmCC"
            alt="Github Link"
          ></img>
        </a>
        <a href="mailto:dann.lam@gmail.com">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADmUlEQVR4Ab1XA5AjQRQ9G6UrnV0627Zt27Zt27Zt27Z9FyeXiZN3v1NzW9vTmd3J6lW9cKbf6690EmlFIBDIQGzr9/vXE+8RjUSPTIP82Xq6pg27VvPCGoTz08KbiE5oBF3rIG6ge/PGWBhAGlpkAdEHzRCMeInzyEjqcHedj258gbgBM/KU1syjVbwo3aBHCPh+foe0YyMsw/vC0KI2dDVLQ1ejFAzNasI8tDekLWvh+/5VzYQOQGENOxfFfb9+wDplNHTVS0JXrUTUpGusk0aye0Ka4CPBi6cNFXbn2RPQ16vIi2igvn4luC6dVUuHWBOs4KCAtGtzOKICbXOnqKVjbqhW8yl2rrqwqUcb2Nctg/P4QThPHKLXy2Hq2ZYXXzgTCARUu4NLBetzZbHp61YQhI3tG8N9/zbU4L53C4bW9fF3+XwtnbH+f79nVA4Z++IBgri5fxcEbDZEh4Bk19qaEkUhPQt/W24Bxwd4z6SEdVSOCHHWcn6LCXEN0m7Fwr+ec/ZpJrznkwcpLcsEfZ3icJ4+hvgAaa9hBu5x+X9Qk4lH0H0wJ+D1xpeB28yAEZHgvZqFM+B71gZRoeoMu2ZeeuEVBhMz4OEMXEjJGfC/nxBnBnbc8CgNuBPUwKYr7pAGDFGm4GnrODOw97YQAZ1YhA9rcQa+Xy0Ij9+LcPFR5xcMXHnlFYtQbMPZEeLHTuRE+d2NcfjDeYSL3bc8goFfloDYhuwMxw+iT3CcT42Zh4uh+O5mQdY83BUGpxla8dcZQPPFEifeeY0j1CBqGTxskhPu20W3pjJhju3PjIDFHf0o9viAUbucwu73iPmXAKT7/2O0AZHw065Dxf3tBBP1j/bC1R/3oYa35s/odmQ3CVo5cRYNh1sI/9rIP8d5/X6+0k59vioLi2x+ciAWPNyEvW9PYd+701jxdAe6nx+HErubB78vtXkUqsz5FmHg2mufUtxDmrmVB5J5UGDb6yOCuFaW2NEZFRfeFXpfNjBL7Rj+DAqc+XKd0tE+bAOl9rTEuqdHQok/BpBK7VyYRz69cvgl6THu5iKU3NNck3ivixPxyvQhlPhvALmi+0NSmDfBF+eWV4fQ//JU1DnSA6X3tmQ7pTbthh4XJgRr4bXpI2QI4rTBQurKYiSeIo7Awi7sXIOJ1Oz0SvTGQthDnKWW83CisZ4ohSEsEdfKrRY3YAdIYis2v4m3iTqiW6ZO/mwNG6/yhNOEf6HhfzYhUKeuAAAAAElFTkSuQmCC"
            alt="Gmail Link"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
