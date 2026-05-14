export async function GET(request) {
  console.log(request);
  // DB calls
  // Third Party API Data Fetching
  // etc
  return Response.json([
    {
      userId: 1,
      id: 1,
      title: " are or make repel provide blinded except option reprehend ",
      body: " because and undertakes\ntakes upon the objections resulting from the expeditious and when\nreprehends the annoyances as which all\nour things are but are the thing will happen to the architect ",
    },
    {
      userId: 1,
      id: 2,
      title: " who is esse ",
      body: " is things in time of life\nsegui are nothing reprehensible pain blessed it pains neither\nflee flatteries pleasure further or nothing annoyance as rejecting\nwho open not debts we can who neither unless nothing ",
    },
    {
      userId: 1,
      id: 3,
      title: " that annoyances as if exercise repels who it is or ",
      body: " and just but by what right\npleasure blinded all choosing or to\npleasure pains or accusing who is born\nmolesties further his hatred and labor and will or ",
    },
    {
      userId: 1,
      id: 4,
      title: " him and is blinded ",
      body: " any and often rejecting pleasure to obtain\nis love but assuming provide things blame\nwho here benefits do not know the thing is held pain and pain itself right\nwho are pleasure things there want ",
    },
    {
      userId: 1,
      id: 5,
      title: " they don't know what they hate ",
      body: " repudiation seeks forgiveness but\nothers or flees is but but is\npleasure all we can be pleasures who\nor is held by pain nor ",
    },
  ]);
}

export async function POST(request) {
  console.log("request:", request);
  const { name } = await request.json();
  return Response.json({ message: name });
}
