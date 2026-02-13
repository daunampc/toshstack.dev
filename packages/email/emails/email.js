import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Html, Head, Body, Button, Text } from "@react-email/components";
import { render } from '@react-email/components';
const Email = () => {
    return (_jsxs(Html, { children: [_jsx(Head, {}), _jsxs(Body, { children: [_jsx(Text, { children: "Ch\u00E0o m\u1EEBng b\u1EA1n \uD83D\uDE80" }), _jsx(Button, { href: "https://toshstack.dev", style: {
                            background: "#000",
                            color: "#fff",
                            padding: "12px 20px",
                        }, children: "Xem website" })] })] }));
};
export const emailHtml = render(_jsx(Email, {}));
