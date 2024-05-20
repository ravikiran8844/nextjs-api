export async function GET(req) {
    return Response.json({ data:"Submit Data API" })
  }



  export async function POST(request) {
    const req = await request.json()

    const res = await fetch('https://survey-aol7o6mvqa-el.a.run.app/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }