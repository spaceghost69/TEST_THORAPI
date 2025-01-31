"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
/*
 *
 * in a nicely wrapped "Content" Card
 *
 *  (title and footer with author icon)
 */
var ContentData_1 = require("../../thor/model/ContentData");
var ContentDataForm_1 = __importDefault(require("../../thor/redux/components/form/ContentDataForm"));
var ContentDataService_1 = require("../../thor/redux/services/ContentDataService");
/*
* AudioPlayer and MarkdownCard are
* Custom hand-built components which take
* ThorAPI generated Model Object parameters
*/
// AudioPlayer to play audio media content
var AudioPlayer_1 = require("../AudioPlayer");
// MarkdownCard to display markdown content
var MarkdownCard_1 = __importDefault(require("../MarkdownCard"));
/**
 * A HOC (High Order Component) which displays a list of ContentData Objects
 * @param props
 * @returns
 */
var ContentDataList = function (props) {
    // Using a query hook automatically fetches data and returns query values
    var _a = (0, ContentDataService_1.useGetContentDatasQuery)(), data = _a.data, error = _a.error, isLoading = _a.isLoading;
    // Individual hooks are also accessible under the generated endpoints:
    // const { data, error, isLoading } = ContentDataApi.endpoints.getContentDataByName.useQuery('cats')
    // render UI based on data and loading state
    if (error) {
        console.log("ERROR:" + JSON.stringify(error));
        return "ERROR:" + JSON.stringify(error);
    }
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)("b", { children: "Loading..." });
    }
    if (!data) {
        return (0, jsx_runtime_1.jsx)("b", { children: "NO RESULTS" });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ContentDataForm_1.default, {}), data.length == 0 && ((0, jsx_runtime_1.jsx)("h1", { children: "NO RESULTS" })), data.map(function (cx) { return ((0, jsx_runtime_1.jsxs)("div", { children: [cx.contentType === ContentData_1.ContentDataContentTypeEnum.Audio && ((0, jsx_runtime_1.jsx)(AudioPlayer_1.AudioPlayer, __assign({}, cx))), cx.contentType !== ContentData_1.ContentDataContentTypeEnum.Markdown && ((0, jsx_runtime_1.jsx)(MarkdownCard_1.default, { title: cx.title, contentData: cx.contentData, authorName: cx.authorName, releaseDate: cx.releaseDate, lastModifiedDate: cx.lastModifiedDate }))] }, cx.id)); })] }));
};
exports.default = ContentDataList;
