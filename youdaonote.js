// Copyright (c) 2012 chenbin@vv5i.org. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be

// Create Click.
function YoudaoNoteOnClick(info, tab) {
  console.log(JSON.stringify(info));
  console.log("Youdao Note " + info.menuItemId +
              " was clicked, state is now: " + info.checked +
              "(previous state was " + info.wasChecked + ")");

  CLIP_HOST='http://note.youdao.com/yws';
  try{
    var%20x=document.createElement('SCRIPT');
    x.type='text/javascript';
    x.src=CLIP_HOST+'/YNoteClipper.js?'+(new%20Date().getTime()/100000);
    x.charset='utf-8';
    document.getElementsByTagName('head')[0].appendChild(x);
  }
  catch(e){alert(e);}

}


var youdaonote = chrome.contextMenus.create(
  {"title": "Add to Youdao Note", "type": "normal", "onclick":YoudaoNoteOnClick})
console.log("youdaonote:" + youdaonote);
