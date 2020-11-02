"use strict";class NxLoad_Default{constructor(){NxIcons.instance().config(".ncode-section .ncode-icon-select"),NxImageSelect.instance().config(".ncode-section .ncode--image-group"),NxToggle_Control.instance().config(".ncode-section .ncopt-depend-toggle"),NxSortable.instance().config(".ncode-section .ncode_tabs_item, .ncode-sortable-content"),NxTabsControl.instance().config(".ncode_tabs_item .ncode_tabs_items-heading"),NxSelect2.instance().config(".ncode-section .nx-select2-option"),NxDimention.instance().config(".ncode-section .ncode-dimensions-options"),NxTabbed.instance().config(".ncode-section .ncode-tabs-content"),NxDates.instance().config(".nx-flatpickr"),NxAccrodion.instance().config(".ncode-nxadd-accordion .nx-click-collapse"),NxTargetToggle.instance().config("[nxtarget-toggle]"),NxGallery.instance().config(".ncode-section .ncode-gallery-options"),NxMultiStep.instance().config(".nxmultistep-form > form")}}class NxImageSelect{config(e){NxImageSelect.$class=e,this.render()}render(){let e=document.querySelectorAll(NxImageSelect.$class);if(e)for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let i=n.querySelectorAll("label");if(i)for(let e=0;e<i.length;e++){let t=i[e],n=t.querySelector("input");t.addEventListener("click",function(){if("radio"==n.getAttribute("type"))for(let e=0;e<i.length;e++)i[e].classList.remove("ncode--active");1==n.checked?t.classList.add("ncode--active"):t.classList.remove("ncode--active")})}}}static instance(){return new NxImageSelect}}class NxToggle_Control{config(e){NxToggle_Control.$class=e,this.render()}render(){let e=document.querySelectorAll(NxToggle_Control.$class);if(e)for(var t=0;t<e.length;t++){"SELECT"==e[t].tagName?e[t].addEventListener("change",this.depend_toggle):(e[t].addEventListener("keyup",this.depend_toggle),e[t].addEventListener("click",this.depend_toggle))}}depend_toggle(){let e=this.id;if(!e)return;this.hasAttribute("data-depend-id")&&(e=this.getAttribute("data-depend-id"));let t=this.value,n=document.querySelectorAll('[data-controller*="'+e+'"]');if(n)for(let e=0;e<n.length;e++){let i=n[e].getAttribute("data-value"),o=n[e].getAttribute("data-condition");"yes"==NxToggle_Control.instance().checkCondition(i,o,t)?n[e].classList.toggle("ncopt-depend-visible"):n[e].classList.remove("ncopt-depend-visible")}}checkCondition(e,t,n){if(-1!=["==","=","==="].indexOf(t))return e==n?"yes":"no";if(-1!=["!=","!","<>","!=="].indexOf(t))return e!=n?"yes":"no";if(-1!=["<"].indexOf(t))return e<n?"yes":"no";if(-1!=["<="].indexOf(t))return e<=n?"yes":"no";if(-1!=[">"].indexOf(t))return e>n?"yes":"no";return-1!=[">="].indexOf(t)&&e>=n?"yes":"no"}static instance(){return new NxToggle_Control}}class NxSortable{config(e){NxSortable.$class=e,this.render()}render(){let e=document.querySelectorAll(NxSortable.$class);if(e)for(let t=0;t<e.length;t++){let n=e[t].getAttribute("data-id");jQuery('[data-id="'+n+'"] > *').sortable(),jQuery('[data-id="'+n+'"] > *').disableSelection()}}static instance(){return new NxSortable}}class NxCodeEditor{config(e){NxCodeEditor.$class=e,this.render()}render(){if("function"==typeof CodeMirror){let e=document.querySelectorAll(NxCodeEditor.$class);if(e)for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;setTimeout(function(){CodeMirror.fromTextArea(n,{lineNumbers:!0})},1);let i=n.parentElement.querySelector(".ncode-copy-code-button");i&&i.addEventListener("click",function(){event.preventDefault(),n.setAttribute("style","opacity: 0; position: absolute; z-index: -1; bottom: 0px; display: block;"),n.select(),n.setSelectionRange(0,99999),document.execCommand("copy"),i.classList.add("success"),setTimeout(function(){i.classList.remove("success"),n.setAttribute("style","display: none;")},2e3)})}}}static instance(){return new NxCodeEditor}}class NxTabsControl{config(e){NxTabsControl.$class=e,this.render()}render(){let e=document.querySelectorAll(NxTabsControl.$class);if(e)for(let t=0;t<e.length;t++){let n=e[t];n&&n.addEventListener("click",this.tabs_toggle)}}tabs_toggle(){event.preventDefault();let e=this.parentElement;if(e){var t=e.querySelector(".ncode_tabs_items_content");t&&t.classList.toggle("ncode-rehide");var n=e.querySelector(".ncode-header-icon > span");return n&&(n.classList.toggle("fa-angle-right"),n.classList.toggle("fa-angle-down")),!0}}static instance(){return new NxTabsControl}}class NxUploader{config(e){NxUploader.$class=e,this.render()}render(){let e=jQuery;e(NxUploader.$class).click(function(t){t.preventDefault();var n=e(this).data("id"),i=e(this).data("title"),o=wp.media({title:i,multiple:!1}).open().on("select",function(t){var i=o.state().get("selection").first(),r=i.toJSON().url;e("#"+n).val(r),e("#"+n+"_id").val(i.toJSON().id),e("#"+n+"_pre").show().attr("src",r),e("#"+n+"_button_remove").removeClass("hidden-removebutton")})}),e("button.nxremove-button").click(function(t){t.preventDefault();var n=e(this).data("id");e("#"+n).val(""),e("#"+n+"_id").val(""),e("#"+n+"_pre").hide(),e(this).addClass("hidden-removebutton")})}static instance(){return new NxUploader}}class NxSelect2{config(e){NxSelect2.$class=e,this.render()}render(){let e=jQuery;e(NxSelect2.$class).select2({placeholder:"Select a state"}),e(".select2-container").each(function(){e(this).removeAttr("style")})}static instance(){return new NxSelect2}}class NxSliderRange{config(e){NxSliderRange.$class=e,this.render()}render(){var e=jQuery;e(NxSliderRange.$class).each(function(){let t=e(this),n=t.find(".ncode-slider"),i=t.find(".ncode-slider-val");n.mbSlider({formatValue:function(e){return e},onSlide:function(e){i&&i.val(n.mbgetVal())}}),i&&i.keyup(function(){let t=e(this).val();n.mbsetVal(t)})})}static instance(){return new NxSliderRange}}class NxSpinner{config(e){NxSpinner.$class=e,this.render()}render(){var e=jQuery;e(NxSpinner.$class).each(function(){var t=e(this),n=t.find("input"),i=t.find(".ui-spinner-button"),o=n.data("unit");i.length&&i.remove(),n&&n.spinner({max:n.data("max")||100,min:n.data("min")||0,step:n.data("step")||1,create:function(e,n){o.length&&t.find(".ui-spinner-up").after('<span class="ui-button-text-only ncode--unit">'+o+"</span>")},spin:function(e,t){n.val(t.value).trigger("change")}})})}static instance(){return new NxSpinner}}class NxDimention{config(e){NxDimention.$class=e,this.render()}render(){let e=document.querySelectorAll(NxDimention.$class);if(e)for(let t=0;t<e.length;t++){let n=e[t],i=n.querySelector("button.dimention-button");if(!i)continue;i.addEventListener("click",this.tabs_toggle);let o=n.querySelectorAll('input[type="number"]');if(o)for(let e=0;e<o.length;e++){let t=o[e];t&&(t.addEventListener("keyup",this.inptu_keyup),t.addEventListener("change",this.inptu_keyup))}}}tabs_toggle(){event.preventDefault();let e=this.parentElement.parentElement;if(e&&(this.classList.toggle("active"),this.classList.contains("active"))){let t=e.querySelectorAll('input[type="number"]');if(t){let e=0;for(let n=0;n<t.length;n++){let i=t[n];i&&(i.hasAttribute("readonly")||(0==n&&(e=i.value),i.value=e))}}}}inptu_keyup(){let e=this.parentElement.parentElement;if(!e)return;let t=e.querySelector("button.dimention-button");if(t&&t.classList.contains("active")){let t=e.querySelectorAll('input[type="number"]');if(t){let e=this.value;for(let n=0;n<t.length;n++){let i=t[n];i&&(i.hasAttribute("readonly")||(i.value=e))}}}}static instance(){return new NxDimention}}class NxColorPiker{config(e){NxColorPiker.$class=e,this.render()}render(){let e=jQuery;e(NxColorPiker.$class).each(function(){let t=e(this),n=t.data("color");t.data("id");Pickr.create({el:NxColorPiker.$class,theme:"nano",swatches:["rgba(244, 67, 54, 1)","rgba(233, 30, 99, 0.95)","rgba(156, 39, 176, 0.9)","rgba(103, 58, 183, 0.85)","rgba(63, 81, 181, 0.8)","rgba(33, 150, 243, 0.75)","rgba(3, 169, 244, 0.7)"],defaultRepresentation:"HEXA",components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!1,rgba:!1,hsva:!1,input:!0,clear:!0,save:!0}},default:n,appClass:"ncode-color-custom",autoReposition:!0,padding:10,comparison:!1,position:"start",inline:!0,outputPrecision:!0})});let t=document.querySelectorAll(".ncode-color-options");if(t)for(let e=0;e<t.length;e++){let o=t[e];if(o){var n=o.querySelector(".ncode-color-picker"),i=o.querySelector(".pickr > .pcr-button");i&&setInterval(function(e,t){var n=t.getAttribute("style").split("; ").filter(function(e){return e.match("color:")?e:""});if(n[0]&&""!=n[0]){var i=n[0].replace("color:","").replace(";","").trim();e.value="rgba(0, 0, 0, 0.15)"!=i?i:""}},500,n,i)}}}static instance(){return new NxColorPiker}}class NxTabbed{config(e){NxTabbed.$class=e,this.render()}render(){let e=document.querySelectorAll(NxTabbed.$class);if(e)for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;n.getAttribute("data-id");let i=n.querySelectorAll(".nx-tab");if(i)for(let e=0;e<i.length;e++){i[e].addEventListener("click",function(){event.preventDefault();NxTabbed.instance().toogleTab(i),this.classList.add("nx-active");let e=this.getAttribute("nx-target");if(!e)return;let t=n.querySelectorAll(".nx-tab-pane");NxTabbed.instance().toogleTab(t);let o=n.querySelector(e);o&&o.classList.add("nx-show")})}}}toogleTab(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.classList.remove("nx-active"),n.classList.remove("nx-show")}}static instance(){return new NxTabbed}}class NxDates{config(e){NxDates.$class=e,this.render()}render(){let e=jQuery;e(NxDates.$class).each(function(){let t=e(this),n=t.data("settings");n.appendTo=t.get(0),t.flatpickr(n)})}static instance(){return new NxDates}}class NxPopup{config(e){NxPopup.$class=e,this.render()}render(){let e=document.querySelectorAll(NxPopup.$class);if(e)for(let t=0;t<e.length;t++){let n=e[t],i=n.querySelector(".border-width-options"),o=n.querySelector(".iconbutton i.fa-edit");o&&o.addEventListener("click",function(t){t.preventDefault();NxPopup.instance().toggle_pop(e,n),i.classList.toggle("active-pop")})}}toggle_pop(e,t){if(e)for(let n=0;n<e.length;n++){let i=e[n];if(t!=i){i.querySelector(".border-width-options").classList.remove("active-pop")}}}static instance(){return new NxPopup}}class NxTargetToggle{config(e){NxTargetToggle.$class=e,this.render()}render(){let e=document.querySelectorAll(NxTargetToggle.$class);if(e)for(let t=0;t<e.length;t++){let n=e[t],i=n.getAttribute("nxtarget-toggle"),o=n.getAttribute("nxtarget-value"),r=n.getAttribute("nxtarget-condition"),a=n.value,l=n.tagName;"INPUT"==l&&(a=this.get_value_radio(n.getAttribute("name")));let c=NxToggle_Control.instance().checkCondition(o,r,a);this.nx_toggle(i,c);let s="click";"SELECT"==l&&(s="change"),n.addEventListener(s,function(){let e=this.value,t=NxToggle_Control.instance().checkCondition(o,r,e);NxTargetToggle.instance().nx_toggle(i,t)})}}get_value_radio(e){let t="",n=document.querySelectorAll('[name="'+e+'"]');if(n)for(let e=0;e<n.length;e++)1==n[e].checked&&(t=n[e].value);return t}nx_toggle(e,t){let n=document.querySelectorAll(e);if(n)for(let e=0;e<n.length;e++){let i=n[e];i&&("yes"==t?i.classList.remove("nx-toggle-opacity"):i.classList.add("nx-toggle-opacity"))}}static instance(){return new NxTargetToggle}}class NxGallery{config(e){NxGallery.$class=e,this.render()}render(){let e=jQuery;e(NxGallery.$class).each(function(){var t,n=e(this),i=n.find(".ncode-edit-gallery"),o=n.find(".ncode-clear-gallery"),r=n.find("ul"),a=n.find("input");n.find("img");n.on("click",".ncode-button, .ncode-edit-gallery",function(n){var l=e(this),c=a.val(),s=l.hasClass("ncode-edit-gallery")?"edit":"add",d="add"!==s||c.length?"gallery-edit":"gallery";n.preventDefault(),void 0!==window.wp&&window.wp.media&&window.wp.media.gallery&&("gallery"===d?(t=window.wp.media({library:{type:"image"},frame:"post",state:"gallery",multiple:!0})).open():(t=window.wp.media.gallery.edit('[gallery ids="'+c+'"]'),"add"===s&&t.setState("gallery-library")),t.on("update",function(e){r.empty();var t=e.models.map(function(e){var t=e.toJSON(),n=t.sizes&&t.sizes.thumbnail&&t.sizes.thumbnail.url?t.sizes.thumbnail.url:t.url;return r.append('<li><img src="'+n+'"></li>'),t.id});a.val(t.join(",")).trigger("change"),o.removeClass("hidden-removebutton"),i.removeClass("hidden-removebutton")}))}),o.on("click",function(e){e.preventDefault(),r.empty(),a.val("").trigger("change"),o.addClass("hidden-removebutton"),i.addClass("hidden-removebutton")})})}static instance(){return new NxGallery}}class NxAccrodion{config(e){NxAccrodion.$class=e,this.render()}render(){let e=document.querySelectorAll(NxAccrodion.$class);if(e)for(let t=0;t<e.length;t++){let n=e[t];n&&n.addEventListener("click",this.tabs_toggle)}}tabs_toggle(){event.preventDefault();let e=this.parentElement;if(!e)return;let t=document.querySelectorAll(NxAccrodion.$class);if(t)for(let e=0;e<t.length;e++)if(t[e]!=this){(i=t[e].querySelector(".ncode-header-icon > span")).classList.remove("fa-angle-down"),i.classList.add("fa-angle-right");var n=t[e].parentElement;if(n)n.querySelector(".nx-click-collapse-content").classList.remove("ncode-rehide")}var i,o=e.querySelector(".nx-click-collapse-content");return o&&o.classList.toggle("ncode-rehide"),(i=e.querySelector(".ncode-header-icon > span"))&&(i.classList.toggle("fa-angle-right"),i.classList.toggle("fa-angle-down")),!0}static instance(){return new NxAccrodion}}class NxBackup{config(e){NxBackup.$class=e,this.render()}render(){let e=jQuery;e(NxBackup.$class).each(function(){var t=e(this),n=(e("body"),t.find(".ncode-import")),i=t.find(".ncode-reset"),o=t.find(".ncode-export-data");o.on("click",function(e){o.select(),o.setSelectionRange(0,99999),document.execCommand("copy")}),i.on("click",function(e){e.preventDefault(),confirm("Are you sure confirm reset all options?")&&window.wp.ajax.post("ncode-reset",{unique:i.data("unique"),nonce:i.data("nonce")}).done(function(e){window.location.reload(!0)}).fail(function(e){alert(e.error)})}),n.on("click",function(e){e.preventDefault(),confirm("Are you sure confirm import all options?")&&window.wp.ajax.post("ncode-import",{unique:n.data("unique"),nonce:n.data("nonce"),data:t.find(".ncode-import-data").val()}).done(function(e){window.location.reload(!0)}).fail(function(e){alert(e.error)})})})}static instance(){return new NxBackup}}class NxCopyButton{config(e){NxCopyButton.$class=e,this.render()}cssRender(){var e=document.head||document.getElementsByTagName("head")[0];if(e){let t='.nxcode-copy-code-button{z-index:99;right:11px;padding:10px;opacity:0;border:0;border-radius:0;outline:0;cursor:pointer}.nxcode-copy-code-button,.nxcode-copy-code-button:after{position:absolute;top:2px;background:#ccc;color:#fff;transition:all .25s ease}.nxcode-copy-code-button:after{content:"Copied!";z-index:0;right:100%;margin:5px 10px 0;padding:5px;border-radius:3px;font-size:11px;-webkit-transform:translateX(120%) scale(0);transform:translateX(120%) scale(0)}.nxcode-copy-code-button.success:after{-webkit-transform:translateX(0) scale(1);transform:translateX(0) scale(1)}pre[v-pre]:hover .nxcode-copy-code-button{opacity:1}',n=document.createElement("style");n.setAttribute("type","text/css"),n.appendChild(document.createTextNode(t)),e.appendChild(n)}}render(){let e=document.querySelectorAll(NxCopyButton.$class);if(e){this.cssRender();for(let n=0;n<e.length;n++){let i=e[n];if(i){var t=document.createElement("button");t.appendChild(document.createTextNode("Click to copy")),t.classList.add("nxcode-copy-code-button"),t.addEventListener("click",function(e){e.preventDefault();let t=this;var n=document.createRange(),o=i.querySelector("code"),r=window.getSelection();n.selectNode(o),r.removeAllRanges(),r.addRange(n);try{document.execCommand("copy"),t.classList.add("success"),setTimeout(function(){t.classList.remove("success")},1e3)}catch(e){t.classList.add("error"),setTimeout(function(){t.classList.remove("error")},1e3)}"function"==typeof(r=window.getSelection()).removeRange?r.removeRange(n):"function"==typeof r.removeAllRanges&&r.removeAllRanges()}),i.appendChild(t)}}}}static instance(){return new NxCopyButton}}!function(e,t){if("function"==typeof define&&define.amd)define(["exports","jquery"],function(e,n){return t(e,n)});else if("undefined"!=typeof exports){var n=require("jquery");t(exports,n)}else t(e,e.jQuery||e.Zepto||e.ender||e.$)}(this,function(e,t){var n={validate:/^(?!(_nonce|_pseudo))[a-zA-Z0-9_-]*(?:\[(?:\d*|(?!(_nonce|_pseudo))[a-zA-Z0-9_-]+)\])*$/i,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,named:/^[a-zA-Z0-9_-]+$/,push:/^$/,fixed:/^\d+$/};function i(e,t){var i={},o={};function r(e,t,n){return e[t]=n,e}function a(){return i}this.addPair=function(t){if(!n.validate.test(t.name))return this;var a=function(e,t){for(var i,a=e.match(n.key);void 0!==(i=a.pop());)n.push.test(i)?t=r([],(l=e.replace(/\[\]$/,""),void 0===o[l]&&(o[l]=0),o[l]++),t):n.fixed.test(i)?t=r([],i,t):n.named.test(i)&&(t=r({},i,t));var l;return t}(t.name,t.value);return i=e.extend(!0,i,a),this},this.addPairs=function(t){if(!e.isArray(t))throw new Error("formSerializer.addPairs expects an Array");for(var n=0,i=t.length;n<i;n++)this.addPair(t[n]);return this},this.serialize=a,this.serializeJSON=function(){return JSON.stringify(a())}}return i.patterns=n,i.serializeObject=function(){return new i(t,this).addPairs(this.serializeArray()).serialize()},i.serializeJSON=function(){return new i(t,this).addPairs(this.serializeArray()).serializeJSON()},void 0!==t.fn&&(t.fn.serializeObjectNCODE=i.serializeObject,t.fn.serializeJSONNCODE=i.serializeJSON),e.FormSerializer=i,i});