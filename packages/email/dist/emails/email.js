"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailHtml = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const components_2 = require("@react-email/components");
const Email = () => {
    return ((0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(components_1.Head, {}), (0, jsx_runtime_1.jsxs)(components_1.Body, { children: [(0, jsx_runtime_1.jsx)(components_1.Text, { children: "Ch\u00E0o m\u1EEBng b\u1EA1n \uD83D\uDE80" }), (0, jsx_runtime_1.jsx)(components_1.Button, { href: "https://toshstack.dev", style: {
                            background: "#000",
                            color: "#fff",
                            padding: "12px 20px",
                        }, children: "Xem website" })] })] }));
};
exports.emailHtml = (0, components_2.render)((0, jsx_runtime_1.jsx)(Email, {}));
