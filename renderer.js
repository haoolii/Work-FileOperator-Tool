// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {BrowserWindow} = require('electron').remote;
require("./background.js");

window.$ = window.jQuery = require("./jquery.js");

$(document).ready(function(){
    $('.setting_form').hide();
    $('#close-btn').click(function(){
        var window = BrowserWindow.getFocusedWindow();
        window.close();
    })
    //在主頁按下設定按鈕
    $('.settingbtn').click(function(){
        $('.main_form').fadeOut(function(){
        $('.setting_form').fadeIn(function(){
                
            })
        })
    });
    //在設定頁按下回主頁
    $('.mainbtn').click(function(){
        $('.setting_form').fadeOut(function(){
            $('.main_form').fadeIn(function(){
                    
                })
            })
    })
    
})