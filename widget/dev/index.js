// import "./bootstrap.js";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";
import { UsersControl, UsersPreview } from "../src";
import { PublicKeyControl, PublicKeyPreview } from "../src";

CMS.registerWidget("hugocryptUsers", UsersControl, UsersPreview);
CMS.registerWidget("hugocryptPublicKey", PublicKeyControl, PublicKeyPreview);

// import config from "js-yaml-loader!../static/config.yml"
// import { init } from "netlify-cms";
//// It loads from config.yml also... (getting 404 if it does not exist in public/config.yml)
//// So this is disabled:
// console.log("Loading", config);
// init({ config });
//// as otherwise duplicate collections are created

// Trying to add initial content, so far not working
window.repoFiles = {
  _posts: {
    "2015-02-14-this-is-a-post.md": {
      content: "---\ntitle: This is a YAML front matter post\nimage: /nf-logo.png\ndate: 2015-02-14T00:00:00.000Z\n---\n\n# I Am a Title in Markdown\n\nHello, world\n\n* One Thing\n* Another Thing\n* A Third Thing\n"
    },
    "2015-02-15-this-is-a-json-frontmatter-post.md": {
      content: "{\n\"title\": \"This is a JSON front matter post\",\n\"image\": \"/nf-logo.png\",\n\"date\": \"2015-02-15T00:00:00.000Z\"\n}\n\n# I Am a Title in Markdown\n\nHello, world\n\n* One Thing\n* Another Thing\n* A Third Thing\n"
    },
    "2015-02-16-this-is-a-toml-frontmatter-post.md": {
      content: "+++\ntitle = \"This is a TOML front matter post\"\nimage = \"/nf-logo.png\"\n\"date\" = \"2015-02-16T00:00:00.000Z\"\n+++\n\n# I Am a Title in Markdown\n\nHello, world\n\n* One Thing\n* Another Thing\n* A Third Thing\n"
    },
    "2015-02-14-this-is-a-post-with-a-different-extension.other": {
      content: "---\ntitle: This post should not appear because the extension is different\nimage: /nf-logo.png\ndate: 2015-02-14T00:00:00.000Z\n---\n\n# I Am a Title in Markdown\n\nHello, world\n\n* One Thing\n* Another Thing\n* A Third Thing\n"
    }
  },
}