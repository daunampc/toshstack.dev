"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailHtml = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const components_2 = require("@react-email/components");
const Email = ({ fullName, email, unsubscribeUrl }) => {
    return ((0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(components_1.Head, {}), (0, jsx_runtime_1.jsxs)(components_1.Preview, { children: [fullName, ", welcome to Toshstack \u2013 Build, Share, Monetize."] }), (0, jsx_runtime_1.jsx)(components_1.Body, { style: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: "#f3f4f6",
                    fontFamily: "Helvetica, Arial, sans-serif",
                }, children: (0, jsx_runtime_1.jsxs)(components_1.Container, { style: {
                        maxWidth: "600px",
                        margin: "40px auto",
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        padding: "48px 36px",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                    }, children: [(0, jsx_runtime_1.jsxs)(components_1.Section, { children: [(0, jsx_runtime_1.jsxs)(components_1.Text, { style: {
                                        fontSize: "30px",
                                        fontWeight: "700",
                                        color: "#ec4899",
                                        marginBottom: "8px",
                                    }, children: ["Welcome to Toshstack.dev, ", fullName, " \uD83C\uDF38"] }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: {
                                        fontSize: "15px",
                                        color: "#6b7280",
                                        marginBottom: "28px",
                                    }, children: ["Your account is registered with ", (0, jsx_runtime_1.jsx)("strong", { children: email })] })] }), (0, jsx_runtime_1.jsxs)(components_1.Section, { children: [(0, jsx_runtime_1.jsx)(components_1.Text, { style: {
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        color: "#374151",
                                        marginBottom: "20px",
                                    }, children: "Toshstack.dev is a next-generation developer platform combining community discussion, high-quality technical publishing, and a built-in digital marketplace." }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: {
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        color: "#374151",
                                        marginBottom: "20px",
                                    }, children: "It brings together the open conversation style of Reddit, the publishing depth of Medium, and the developer focus of Dev.to \u2014 while allowing creators to sell digital products and tools." }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: {
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        color: "#374151",
                                        marginBottom: "28px",
                                    }, children: ["On Toshstack, you can:", (0, jsx_runtime_1.jsx)("br", {}), "\u2022 Publish technical articles", (0, jsx_runtime_1.jsx)("br", {}), "\u2022 Start meaningful discussions", (0, jsx_runtime_1.jsx)("br", {}), "\u2022 Build your developer reputation", (0, jsx_runtime_1.jsx)("br", {}), "\u2022 Monetize your knowledge through digital products"] }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: {
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        color: "#374151",
                                        marginBottom: "36px",
                                    }, children: "Whether you're here to learn, contribute, or grow your audience \u2014 this is your space to build impact." })] }), (0, jsx_runtime_1.jsx)(components_1.Section, { style: { textAlign: "center" }, children: (0, jsx_runtime_1.jsx)(components_1.Button, { href: "https://toshstack.dev", style: {
                                    backgroundColor: "#6366f1",
                                    color: "#ffffff",
                                    padding: "14px 34px",
                                    borderRadius: "999px",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    textDecoration: "none",
                                    display: "inline-block",
                                }, children: "Enter Toshstack \u2192" }) }), (0, jsx_runtime_1.jsx)(components_1.Hr, { style: {
                                margin: "40px 0 24px 0",
                                borderColor: "#e5e7eb",
                            } }), (0, jsx_runtime_1.jsxs)(components_1.Section, { style: { textAlign: "center" }, children: [(0, jsx_runtime_1.jsxs)(components_1.Text, { style: {
                                        fontSize: "13px",
                                        color: "#9ca3af",
                                        marginBottom: "14px",
                                    }, children: ["Built for developers. Designed with clarity. \uD83C\uDDEF\uD83C\uDDF5", (0, jsx_runtime_1.jsx)("br", {}), "\u00A9 ", new Date().getFullYear(), " Toshstack.dev"] }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: {
                                        fontSize: "12px",
                                        color: "#9ca3af",
                                        lineHeight: "20px",
                                    }, children: ["This email was sent to ", (0, jsx_runtime_1.jsx)("strong", { children: email }), ".", (0, jsx_runtime_1.jsx)("br", {}), "If you no longer wish to receive updates, you can", " ", (0, jsx_runtime_1.jsx)(components_1.Link, { href: unsubscribeUrl, style: {
                                                color: "#6366f1",
                                                textDecoration: "underline",
                                            }, children: "unsubscribe here" }), "."] })] })] }) })] }));
};
const emailHtml = ({ fullName, email, unsubscribeUrl }) => (0, components_2.render)((0, jsx_runtime_1.jsx)(Email, { fullName: fullName, email: email, unsubscribeUrl: unsubscribeUrl }));
exports.emailHtml = emailHtml;
