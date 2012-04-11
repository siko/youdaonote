// Copyright (c) 2012 chenbin@vv5i.org. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be

// Create Click.
function YoudaoNoteOnClick(info, tab) {
  console.log(JSON.stringify(info));
  console.log("Youdao Note " + info.menuItemId +
              " was clicked, state is now: " + info.checked +
              "(previous state was " + info.wasChecked + ")");

}
var checkbox1 = chrome.contextMenus.create(
  {"title": "Add to Youdao Note", "type": "normal", "onclick":YoudaoNoteOnClick});

