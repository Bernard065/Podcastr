"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

const ConvexClerkProvider = ({ children }: { children: ReactNode }) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    appearance={{
      layout: {
        socialButtonsVariant: "iconButton",
        logoImageUrl: "/assets/icons/auth-logo.svg",
      },
      variables: {
        colorBackground: "#15171c",
        colorPrimary: "",
        colorText: "white",
        colorInputBackground: "#1b1f29",
        colorInputText: "white",
      },
      elements: {
        formButtonPrimary: "bg-orange-500 hover:bg-orange-400",
        footerActionLink: "text-orange-500",
        socialButtonsGitHub: "bg-white text-black hover:bg-gray-100",
      },
    }}
  >
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexClerkProvider;
