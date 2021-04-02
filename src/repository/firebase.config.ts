
import * as Firestore from "@google-cloud/firestore/build/src";

/*
You will need that json file to connect to firebase or create your own
following the instructions found on googleapis.dev
 */


// @todo secure the json in an environment variable
export const DB = new Firestore.Firestore({projectId:"godogeme", credentials: {
    private_key:'../../.private/godogeme-8b669f7d01d3.json'
    }});

