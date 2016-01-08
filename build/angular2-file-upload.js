webpackJsonp([2],{0:function(e,t,o){e.exports=o(99)},39:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,s=3>r?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(s=(3>r?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},i=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=o(3),s=function(){function e(e){this.element=e,this.fileOver=new r.EventEmitter}return e.prototype.getOptions=function(){return this.uploader.options},e.prototype.getFilters=function(){},e.prototype.onDrop=function(e){var t=this._getTransfer(e);if(t){var o=this.getOptions(),n=this.getFilters();this._preventAndStop(e),this.uploader.addToQueue(t.files,o,n),this.fileOver.next(!1)}},e.prototype.onDragOver=function(e){var t=this._getTransfer(e);this._haveFiles(t.types)&&(t.dropEffect="copy",this._preventAndStop(e),this.fileOver.next(!0))},e.prototype.onDragLeave=function(e){e.currentTarget!==this.element[0]&&(this._preventAndStop(e),this.fileOver.next(!1))},e.prototype._getTransfer=function(e){return e.dataTransfer?e.dataTransfer:e.originalEvent.dataTransfer},e.prototype._preventAndStop=function(e){e.preventDefault(),e.stopPropagation()},e.prototype._haveFiles=function(e){return e?e.indexOf?-1!==e.indexOf("Files"):e.contains?e.contains("Files"):!1:!1},e.prototype._addOverClass=function(e){e.addOverClass()},e.prototype._removeOverClass=function(e){e.removeOverClass()},e=n([r.Directive({selector:"[ng2-file-drop]",properties:["uploader"],events:["fileOver"],host:{"(drop)":"onDrop($event)","(dragover)":"onDragOver($event)","(dragleave)":"onDragLeave($event)"}}),i("design:paramtypes",[r.ElementRef])],e)}();t.FileDrop=s},40:function(e,t){function o(e){return!(!e||!(e.nodeName||e.prop&&e.attr&&e.find))}var n=function(){function e(e){var t=o(e),n=t?e.value:e,i="string"==typeof n?"FakePath":"Object",r="_createFrom"+i;this[r](n)}return e.prototype._createFromFakePath=function(e){this.lastModifiedDate=null,this.size=null,this.type="like/"+e.slice(e.lastIndexOf(".")+1).toLowerCase(),this.name=e.slice(e.lastIndexOf("/")+e.lastIndexOf("\\")+2)},e.prototype._createFromObject=function(e){this.size=e.size,this.type=e.type,this.name=e.name},e}();t.FileLikeObject=n},41:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,s=3>r?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(s=(3>r?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},i=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=o(3),s=function(){function e(e){this.element=e}return e.prototype.getOptions=function(){return this.uploader.options},e.prototype.getFilters=function(){},e.prototype.isEmptyAfterSelection=function(){return!!this.element.nativeElement.attributes.multiple},e.prototype.onChange=function(){var e=this.element.nativeElement.files,t=this.getOptions(),o=this.getFilters();this.uploader.addToQueue(e,t,o),this.isEmptyAfterSelection()},e=n([r.Directive({selector:"[ng2-file-select]",properties:["uploader"],host:{"(change)":"onChange()"}}),i("design:paramtypes",[r.ElementRef])],e)}();t.FileSelect=s,t.fileUpload=[s]},97:function(e,t,o){var n=o(40),i=function(){function e(e,t,o){this.uploader=e,this.some=t,this.options=o,this.alias="file",this.url="/",this.method="POST",this.headers=[],this.withCredentials=!0,this.formData=[],this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.index=null,this.file=new n.FileLikeObject(t),this._file=t,this.url=e.url}return e.prototype.upload=function(){try{this.uploader.uploadItem(this)}catch(e){this.uploader._onCompleteItem(this,"",0,[]),this.uploader._onErrorItem(this,"",0,[])}},e.prototype.cancel=function(){this.uploader.cancelItem(this)},e.prototype.remove=function(){this.uploader.removeFromQueue(this)},e.prototype.onBeforeUpload=function(){},e.prototype.onProgress=function(e){},e.prototype.onSuccess=function(e,t,o){},e.prototype.onError=function(e,t,o){},e.prototype.onCancel=function(e,t,o){},e.prototype.onComplete=function(e,t,o){},e.prototype._onBeforeUpload=function(){this.isReady=!0,this.isUploading=!0,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()},e.prototype._onProgress=function(e){this.progress=e,this.onProgress(e)},e.prototype._onSuccess=function(e,t,o){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=null,this.onSuccess(e,t,o)},e.prototype._onError=function(e,t,o){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=null,this.onError(e,t,o)},e.prototype._onCancel=function(e,t,o){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=null,this.onCancel(e,t,o)},e.prototype._onComplete=function(e,t,o){this.onComplete(e,t,o),this.uploader.removeAfterUpload&&this.remove()},e.prototype._prepareToUploading=function(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0},e}();t.FileItem=i},98:function(e,t,o){function n(e){return File&&e instanceof File}var i=o(40),r=o(97),s=function(){function e(e){this.options=e,this.isUploading=!1,this.queue=[],this.progress=0,this.autoUpload=!1,this.isHTML5=!0,this.removeAfterUpload=!1,this._nextIndex=0,this.filters=[],this.url=e.url,this.authToken=e.authToken,this.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.filters.unshift({name:"folder",fn:this._folderFilter})}return e.prototype.addToQueue=function(e,t,o){for(var n=this,s=[],p=0;p<e.length;p++){var a=e[p];s.push(a)}var l=this._getFilters(o),u=this.queue.length,h=[];s.map(function(e){var o=new i.FileLikeObject(e);if(n._isValidFile(o,[],t)){var s=new r.FileItem(n,e,t);h.push(s),n.queue.push(s),n._onAfterAddingFile(s)}else{var p=l[n._failFilterIndex];n._onWhenAddingFileFailed(o,p,t)}}),this.queue.length!==u&&(this._onAfterAddingAll(h),this.progress=this._getTotalProgress()),this._render(),this.autoUpload&&this.uploadAll()},e.prototype.removeFromQueue=function(e){var t=this.getIndexOfItem(e),o=this.queue[t];o.isUploading&&o.cancel(),this.queue.splice(t,1),this.progress=this._getTotalProgress()},e.prototype.clearQueue=function(){for(;this.queue.length;)this.queue[0].remove();this.progress=0},e.prototype.uploadItem=function(e){var t=this.getIndexOfItem(e),o=this.queue[t],n=this.isHTML5?"_xhrTransport":"_iframeTransport";o._prepareToUploading(),this.isUploading||(this.isUploading=!0,this[n](o))},e.prototype.cancelItem=function(e){var t=this.getIndexOfItem(e),o=this.queue[t],n=this.isHTML5?"_xhr":"_form";o&&o.isUploading&&o[n].abort()},e.prototype.uploadAll=function(){var e=this.getNotUploadedItems().filter(function(e){return!e.isUploading});e.length&&(e.map(function(e){return e._prepareToUploading()}),e[0].upload())},e.prototype.cancelAll=function(){var e=this.getNotUploadedItems();e.map(function(e){return e.cancel()})},e.prototype.isFile=function(e){return n(e)},e.prototype.isFileLikeObject=function(e){return e instanceof i.FileLikeObject},e.prototype.getIndexOfItem=function(e){return"number"==typeof e?e:this.queue.indexOf(e)},e.prototype.getNotUploadedItems=function(){return this.queue.filter(function(e){return!e.isUploaded})},e.prototype.getReadyItems=function(){return this.queue.filter(function(e){return e.isReady&&!e.isUploading}).sort(function(e,t){return e.index-t.index})},e.prototype.destroy=function(){},e.prototype.onAfterAddingAll=function(e){},e.prototype.onAfterAddingFile=function(e){},e.prototype.onWhenAddingFileFailed=function(e,t,o){},e.prototype.onBeforeUploadItem=function(e){},e.prototype.onProgressItem=function(e,t){},e.prototype.onProgressAll=function(e){},e.prototype.onSuccessItem=function(e,t,o,n){},e.prototype.onErrorItem=function(e,t,o,n){},e.prototype.onCancelItem=function(e,t,o,n){},e.prototype.onCompleteItem=function(e,t,o,n){},e.prototype.onCompleteAll=function(){},e.prototype._getTotalProgress=function(e){if(void 0===e&&(e=0),this.removeAfterUpload)return e;var t=this.getNotUploadedItems().length,o=t?this.queue.length-t:this.queue.length,n=100/this.queue.length,i=e*n/100;return Math.round(o*n+i)},e.prototype._getFilters=function(e){if(!e)return this.filters;if(Array.isArray(e))return e;var t=e.match(/[^\s,]+/g);return this.filters.filter(function(e){return-1!==t.indexOf(e.name)})},e.prototype._render=function(){},e.prototype._folderFilter=function(e){return!(!e.size&&!e.type)},e.prototype._queueLimitFilter=function(){return this.queue.length<this.queueLimit},e.prototype._isValidFile=function(e,t,o){var n=this;return this._failFilterIndex=-1,t.length?t.every(function(t){return n._failFilterIndex++,t.fn.call(n,e,o)}):!0},e.prototype._isSuccessCode=function(e){return e>=200&&300>e||304===e},e.prototype._transformResponse=function(e,t){return e},e.prototype._parseHeaders=function(e){var t,o,n,i={};return e?(e.split("\n").map(function(e){n=e.indexOf(":"),t=e.slice(0,n).trim().toLowerCase(),o=e.slice(n+1).trim(),t&&(i[t]=i[t]?i[t]+", "+o:o)}),i):i},e.prototype._headersGetter=function(e){return function(t){return t?e[t.toLowerCase()]||null:e}},e.prototype._xhrTransport=function(e){var t=this,o=e._xhr=new XMLHttpRequest,n=new FormData;if(this._onBeforeUploadItem(e),"number"!=typeof e._file.size)throw new TypeError("The file specified is no longer valid");n.append(e.alias,e._file,e.file.name),o.upload.onprogress=function(o){var n=Math.round(o.lengthComputable?100*o.loaded/o.total:0);t._onProgressItem(e,n)},o.onload=function(){var n=t._parseHeaders(o.getAllResponseHeaders()),i=t._transformResponse(o.response,n),r=t._isSuccessCode(o.status)?"Success":"Error",s="_on"+r+"Item";t[s](e,i,o.status,n),t._onCompleteItem(e,i,o.status,n)},o.onerror=function(){var n=t._parseHeaders(o.getAllResponseHeaders()),i=t._transformResponse(o.response,n);t._onErrorItem(e,i,o.status,n),t._onCompleteItem(e,i,o.status,n)},o.onabort=function(){var n=t._parseHeaders(o.getAllResponseHeaders()),i=t._transformResponse(o.response,n);t._onCancelItem(e,i,o.status,n),t._onCompleteItem(e,i,o.status,n)},o.open(e.method,e.url,!0),o.withCredentials=e.withCredentials,this.authToken&&o.setRequestHeader("Authorization",this.authToken),o.send(n),this._render()},e.prototype._iframeTransport=function(e){},e.prototype._onWhenAddingFileFailed=function(e,t,o){this.onWhenAddingFileFailed(e,t,o)},e.prototype._onAfterAddingFile=function(e){this.onAfterAddingFile(e)},e.prototype._onAfterAddingAll=function(e){this.onAfterAddingAll(e)},e.prototype._onBeforeUploadItem=function(e){e._onBeforeUpload(),this.onBeforeUploadItem(e)},e.prototype._onProgressItem=function(e,t){var o=this._getTotalProgress(t);this.progress=o,e._onProgress(t),this.onProgressItem(e,t),this.onProgressAll(o),this._render()},e.prototype._onSuccessItem=function(e,t,o,n){e._onSuccess(t,o,n),this.onSuccessItem(e,t,o,n)},e.prototype._onErrorItem=function(e,t,o,n){e._onError(t,o,n),this.onErrorItem(e,t,o,n)},e.prototype._onCancelItem=function(e,t,o,n){e._onCancel(t,o,n),this.onCancelItem(e,t,o,n)},e.prototype._onCompleteItem=function(e,t,o,n){e._onComplete(t,o,n),this.onCompleteItem(e,t,o,n);var i=this.getReadyItems()[0];return this.isUploading=!1,i?void i.upload():(this.onCompleteAll(),this.progress=this._getTotalProgress(),void this._render())},e}();t.FileUploader=s},99:function(e,t,o){function n(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}n(o(41)),n(o(39)),n(o(98));var i=o(41),r=o(39);t.FILE_UPLOAD_DIRECTIVES=[i.FileSelect,r.FileDrop]}});
//# sourceMappingURL=angular2-file-upload.js.map