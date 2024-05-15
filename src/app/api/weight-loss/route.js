export async function GET(req) {
    const res = await fetch('https://survey-aol7o6mvqa-el.a.run.app/problem/8198fba8-789a-437b-a302-cefe4553886e/questions',{
        headers: {
            'Content-Type': 'application/json',
          }
    })
    const data = await res.json()
    console.log(data)
    return Response.json({ data })
  }