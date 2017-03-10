import { Session } from "meteor/session";
import { Logger } from "/client/api";

Session.set("DEFAULT_LAYOUT", "coreLayoutBeesknees");
Session.set("DEFAULT_WORKFLOW", "coreWorkflow");
Logger.info("setting DEFAULT_LAYOUT");
