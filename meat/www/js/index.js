/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {};


// デバッグフラグ
var log_flag = true;


/**
 * デバッグログ表示メソッド
 * @param   l：logで表示する内容
 * 
 */
app.log = function(l){
    if(this.log_flag)
        console.log('Cordova：' + l);
};


/**
 * 初期化メソッド
 * 
 * @return {[type]} [description]
 */
app.initialize = function() {
    this.log('initialize');
    // app.bindEvents()を処理
    this.bindEvents();
};


/**
 * アプリ起動後に処理されるinitializeメソッド内で呼ばれる
 * 
 * @return {[type]} [description]
 */
app.bindEvents = function() {
    this.log('bindEvents');
    // ページをロードし終えたらapp.onDeviceReadyを処理
    document.addEventListener('deviceready', this.onDeviceReady, false);
};



/**
 * devicereadyのイベントハンドラ
 * 
 * @return {[type]} [description]
 */
app.onDeviceReady = function() {
    this.log('onDeviceReady');
    this.receivedEvent('deviceready');
}


/**
 * DOMの処理
 * 
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
app.receivedEvent = function(id) {

    var parentElement       =   document.getElementById(id);
    var listeningElement    =   parentElement.querySelector('.listening');
    var receivedElement     =   parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    this.log('Received Event: ' + id);
}



// 初期化処理開始
app.initialize();

