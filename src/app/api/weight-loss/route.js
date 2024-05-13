export async function GET(req) {
    const res = await fetch('https://survey-aol7o6mvqa-el.a.run.app/problem/fa57f076-26a9-4850-add5-204862fe59ba/questions',{
        headers: {
            'Content-Type': 'application/json',
          }
    })
    const data = await res.json()
    console.log(data)
    return Response.json({ data })
  }