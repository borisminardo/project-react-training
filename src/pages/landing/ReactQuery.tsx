import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatFact />
    </QueryClientProvider>
  );
}

async function getCatFact(): Promise<void> {
  const response = await fetch("https://catfact.ninja/fact", {
    method: "GET",
  });
  if (response.ok) {
    return await response.json();
  }
}

function CatFact() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({
    queryKey: ["catFact"],
    queryFn: getCatFact,
  });

  // Mutations
  const mutation = useMutation({
    mutationFn: getCatFact,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["catFact"] });
    },
  });

  return (
    <div style={{ margin: "50px" }}>
      <h3>Random cat facts with react query</h3>
      <h5>{JSON.stringify(query.data?.fact)}</h5>

      <button onClick={getCatFact}>Refresh</button>
    </div>
  );
}
