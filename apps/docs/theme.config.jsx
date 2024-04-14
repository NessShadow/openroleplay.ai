export default {
  logo: <span className="font-medium">📙 RoleplayChat.ai Docs</span>,
  docsRepositoryBase:
    "https://github.com/Open-Roleplay-AI/RoleplayChat.ai/tree/main/apps/docs",
  head: (
    <>
      <meta property="og:title" content="RoleplayChat.ai Docs" />
      <meta
        property="og:description"
        content="Learn how to create engaging characters at RoleplayChat.ai"
      />
    </>
  ),
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          RoleplayChat.ai
        </a>
        .
      </span>
    ),
  },
};
