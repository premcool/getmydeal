// Import Collections
import { Products } from "/lib/collections";

import { $ } from "meteor/jquery";
import { Reaction } from "/client/api";
import { ReactionProduct } from "/lib/api";
import { Media } from "/lib/collections";
import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";
import { Template } from "meteor/templating";
import Sortable from "sortablejs";

Template.featured.onCreated(function () {
  this.subscribe("products");
});

Template.featured.helpers({
  products: function() {
    return Products.find({});
  },
  media: function (id) {
    const media = Media.findOne({
      "metadata.productId": id,
      "metadata.toGrid": 1
    }, {
      sort: { "metadata.priority": 1, "uploadedAt": 1 }
    });
    return media instanceof FS.File ? media : false;
  },
  pdpPath(handle) {
      return Reaction.Router.pathFor("product", {
        hash: {
          handle
        }
      });
    }
});
