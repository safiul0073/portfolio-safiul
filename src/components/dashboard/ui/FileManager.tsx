"use client";
import React, {useEffect} from 'react'
import Flmngr from "@flmngr/flmngr-react";

const serverUrl = 'http://127.0.0.1:8000'

// Starts async loading Flmngr code from CDN (this is non-blocking action)
Flmngr.load({
    apiKey: "FLMNFLMN",                                  // default free key
    urlFileManager: `${serverUrl}/flmngr`, // demo server
    urlFiles: `${serverUrl}/uploads`,             // demo file storage
    
});

const FileManager = () => {
    useEffect(() => {
        const test = fetch("http://127.0.0.1:8000/test", {
            method: "POST",
            body: JSON.stringify({a: 1, b: 2}),
        })
      }, []);
  return (
    <button 
        onClick={() => {

            Flmngr.open({
                // Do not specify parameters already passed into Flmngr.load(...) before.
                // The same for other methods like Flmngr.upload(...), Flmngr.edit(...), etc.
                isMultiple: false,                                   // let selecting a single file
                acceptExtensions: ["png", "jpg", "jpeg", "gif", "webp"],
                onFinish: (files) => {
                    console.log("User picked:");
                    console.log(files);
                }
            });
        }}
    >
        Open file manager
    </button>
  )
}

export default FileManager;