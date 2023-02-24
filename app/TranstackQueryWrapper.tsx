"use Client";
const { QueryClient, QueryClientProvider } = require("@tanstack/react-query");
const queryClient = new QueryClient();
const TanstackQueryWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default TanstackQueryWrapper;
