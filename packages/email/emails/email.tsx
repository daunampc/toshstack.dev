import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Preview,
  Hr,
} from "@react-email/components";
import { JSX } from "react";

const Email = (): JSX.Element => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Toshstack.dev – Build beautifully.</Preview>
      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#0f172a", // Tokyo night navy
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "40px auto",
            backgroundColor: "#111827",
            borderRadius: "16px",
            padding: "40px 30px",
            color: "#e5e7eb",
          }}
        >
          <Section>
            <Text
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#f472b6", // sakura pink
              }}
            >
              Welcome to Toshstack.dev 🌸
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "26px",
                color: "#cbd5e1",
              }}
            >
              Greetings from Tokyo.
              <br />
              <br />
              We're excited to have you join our journey — where code meets
              creativity and modern web craftsmanship.
              <br />
              <br />
              Toshstack.dev is built for developers who appreciate clean
              architecture, elegant design, and purposeful engineering.
            </Text>
          </Section>

          <Section style={{ textAlign: "center", marginTop: "30px" }}>
            <Button
              href="https://toshstack.dev"
              style={{
                backgroundColor: "#6366f1", // anime indigo
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Explore Toshstack →
            </Button>
          </Section>

          <Hr
            style={{
              borderColor: "#1f2937",
              margin: "40px 0 20px 0",
            }}
          />

          <Text
            style={{
              fontSize: "13px",
              color: "#6b7280",
              textAlign: "center",
            }}
          >
            Crafted with passion in Tokyo 🇯🇵
            <br />
            © {new Date().getFullYear()} Toshstack.dev
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;
