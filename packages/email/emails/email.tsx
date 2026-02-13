import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Link,
  Preview,
} from "@react-email/components";
import { render } from '@react-email/components';
import { JSX } from "react";


const Email = ({ fullName, email, unsubscribeUrl }: { fullName: string, email: string, unsubscribeUrl: string }): JSX.Element => {
  return (
    <Html>
      <Head />
      <Preview>
        {fullName}, welcome to Toshstack – Build, Share, Monetize.
      </Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f3f4f6",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "40px auto",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "48px 36px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
          }}
        >
          {/* Header */}
          <Section>
            <Text
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#ec4899",
                marginBottom: "8px",
              }}
            >
              Welcome to Toshstack.dev, {fullName} 🌸
            </Text>

            <Text
              style={{
                fontSize: "15px",
                color: "#6b7280",
                marginBottom: "28px",
              }}
            >
              Your account is registered with <strong>{email}</strong>
            </Text>
          </Section>

          {/* Main Content */}
          <Section>
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "28px",
                color: "#374151",
                marginBottom: "20px",
              }}
            >
              Toshstack.dev is a next-generation developer platform combining
              community discussion, high-quality technical publishing, and a
              built-in digital marketplace.
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "28px",
                color: "#374151",
                marginBottom: "20px",
              }}
            >
              It brings together the open conversation style of Reddit,
              the publishing depth of Medium, and the developer focus of Dev.to —
              while allowing creators to sell digital products and tools.
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "28px",
                color: "#374151",
                marginBottom: "28px",
              }}
            >
              On Toshstack, you can:
              <br />• Publish technical articles
              <br />• Start meaningful discussions
              <br />• Build your developer reputation
              <br />• Monetize your knowledge through digital products
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "28px",
                color: "#374151",
                marginBottom: "36px",
              }}
            >
              Whether you're here to learn, contribute, or grow your audience —
              this is your space to build impact.
            </Text>
          </Section>

          {/* CTA */}
          <Section style={{ textAlign: "center" }}>
            <Button
              href="https://toshstack.dev"
              style={{
                backgroundColor: "#6366f1",
                color: "#ffffff",
                padding: "14px 34px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Enter Toshstack →
            </Button>
          </Section>

          <Hr
            style={{
              margin: "40px 0 24px 0",
              borderColor: "#e5e7eb",
            }}
          />

          {/* Footer */}
          <Section style={{ textAlign: "center" }}>
            <Text
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                marginBottom: "14px",
              }}
            >
              Built for developers. Designed with clarity. 🇯🇵
              <br />
              © {new Date().getFullYear()} Toshstack.dev
            </Text>

            <Text
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                lineHeight: "20px",
              }}
            >
              This email was sent to <strong>{email}</strong>.
              <br />
              If you no longer wish to receive updates, you can{" "}
              <Link
                href={unsubscribeUrl}
                style={{
                  color: "#6366f1",
                  textDecoration: "underline",
                }}
              >
                unsubscribe here
              </Link>.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>);
}


export const emailHtml = ({ fullName, email, unsubscribeUrl }: { fullName: string, email: string, unsubscribeUrl: string }) => render(<Email fullName={fullName} email={email} unsubscribeUrl={unsubscribeUrl} />);

