"use strict";jQuery(document).ready(function(e){function n(){setTimeout(function(){var n=window.location.hash.substr(1),o=(n=window.location.hash.replace("#ntab=","")).split("/"),t=o[0]?o[0]:n,s=o[1]?o[1]:"";t&&(e(".nextcode-nav-menu .nav-setting li").removeClass("active"),e('.nextcode-nav-menu .nav-setting li a[href="#ntab='+t+'"]').parent().addClass("active"),e(".nextcode-content-area .settings-content > div").removeClass("active"),""!=s?(e('.nextcode-nav-menu .nav-setting li a[href="#ntab='+t+"/"+s+'"]').parent().addClass("active"),e(".nextcode-content-area .settings-content > div#"+t+"-"+s).addClass("active")):e(".nextcode-content-area .settings-content > div#"+t).addClass("active"))},15)}n(),e('.nextcode-nav-menu .nav-setting li a[href*="#ntab"]').click(function(){n()}),e('.wp-submenu li a[href*="#ntab"]').click(function(){n()}),e(".nextcode-submit-admin").submit(function(n){n.preventDefault();let o=e(this);var t=o.serializeJSONNCODE();e("body").addClass("ncode-disabled");let s=o.find(".submit-button");s.addClass("disabled");let i=o.find(".message-view");window.wp.ajax.post("ncode-adminoptions",{keys:o.data("keys"),nonce:o.data("nonce"),data:t}).done(function(n){e("body").removeClass("ncode-disabled"),i.removeClass("hide-message"),i.html(n.success),setTimeout(function(){i.addClass("hide-message"),s.removeClass("disabled")},2e3)}).fail(function(n){e("body").removeClass("ncode-disabled"),i.removeClass("hide-message"),i.html(n.error),setTimeout(function(){i.addClass("hide-message"),s.removeClass("disabled")},2e3)})}),e(".submit-section .reset-button").click(function(n){n.preventDefault();let o=e(this);if(confirm("Are you sure confirm reset all options?")){let n=e(document).find(".message-view");e("body").addClass("ncode-disabled"),o.addClass("disabled"),window.wp.ajax.post("ncode-reset",{unique:o.data("unique"),nonce:o.data("nonce")}).done(function(t){e("body").removeClass("ncode-disabled"),n.removeClass("hide-message"),n.html(t.success),setTimeout(function(){n.addClass("hide-message"),o.removeClass("disabled"),window.location.reload(!0)},2e3)}).fail(function(t){e("body").removeClass("ncode-disabled"),n.removeClass("hide-message"),n.html(t.error),setTimeout(function(){n.addClass("hide-message"),o.removeClass("disabled")},2e3)})}})}),jQuery(window).on("load",function(){jQuery(".preloader").fadeOut()}),jQuery(document).ready(function(e){NxRepeater.instance().config(".ncode_tabs_item",{initEmpty:!0,appendtype:"last",clonetype:"last-item",firstItemDelete:!0,whenDelete:!0,whenDeleteMessage:"Are you sure you want to delete this element?"}),NxIcons.instance().config(".ncode-section .ncode-icon-select"),NxImageSelect.instance().config(".ncode-section .ncode--image-group"),NxToggle_Control.instance().config(".ncode-section .ncopt-depend-toggle"),NxSortable.instance().config(".ncode-section .ncode_tabs_item, .ncode-sortable-content"),NxCodeEditor.instance().config(".ncode-section .nx-codeeditor"),NxTabsControl.instance().config(".ncode_tabs_item .ncode_tabs_items-heading"),NxUploader.instance().config(".ncode-section .ncode-files-uploder"),NxSelect2.instance().config(".ncode-section .nx-select2-option"),NxSliderRange.instance().config(".ncode-section .ncode-slider-options"),NxSpinner.instance().config(".ncode-section .ncode-spinner-options"),NxDimention.instance().config(".ncode-section .ncode-dimensions-options"),NxColorPiker.instance().config(".ncode-color-options .ncode-render-color"),NxTabbed.instance().config(".ncode-section .ncode-tabs-content"),NxDates.instance().config(".nx-flatpickr"),NxPopup.instance().config(".ncode-popup-option"),NxTargetToggle.instance().config("[nxtarget-toggle]"),NxGallery.instance().config(".ncode-section .ncode-gallery-options"),NxAccrodion.instance().config(".ncode-nxadd-accordion .nx-click-collapse"),NxBackup.instance().config(".ncode-backup-options")});