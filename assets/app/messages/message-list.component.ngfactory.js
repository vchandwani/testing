/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./message.component.ngfactory";
import * as i2 from "./message.component";
import * as i3 from "ng4-loading-spinner";
import * as i4 from "./message.service";
import * as i5 from "@angular/common";
import * as i6 from "./message-list.component";
var styles_MessageListComponent = [];
var RenderType_MessageListComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_MessageListComponent, data: {} });
export { RenderType_MessageListComponent as RenderType_MessageListComponent };
function View_MessageListComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-message", [], null, null, null, i1.View_MessageComponent_0, i1.RenderType_MessageComponent)), i0.ɵdid(1, 49152, null, 0, i2.MessageComponent, [i3.Ng4LoadingSpinnerService, i4.MessageService], { message: [0, "message"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
export function View_MessageListComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(1, 0, null, null, 4, "div", [["class", "col-md-8 col-md-offset-2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MessageListComponent_1)), i0.ɵdid(4, 802816, null, 0, i5.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messages; _ck(_v, 4, 0, currVal_0); }, null); }
export function View_MessageListComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-message-list", [], null, null, null, View_MessageListComponent_0, RenderType_MessageListComponent)), i0.ɵdid(1, 114688, null, 0, i6.MessageListComponent, [i4.MessageService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MessageListComponentNgFactory = i0.ɵccf("app-message-list", i6.MessageListComponent, View_MessageListComponent_Host_0, {}, {}, []);
export { MessageListComponentNgFactory as MessageListComponentNgFactory };
