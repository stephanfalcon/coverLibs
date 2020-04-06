const axios = require("axios")
const cheerio = require("cheerio")

let indeedURL = "https://www.indeed.com/viewjob?jk=5847792b24aaf83d&tk=1e58cmckvnhib800&from=serp&vjs=3&advn=1198660448591660&adid=343432832&sjdu=KrExOckDUwcfZdd7bV4mPzSfjhua7l-6nIjy1orA99f-9CF8pZ3iuoFP4vfDMw6Uu6Qf3rclegEBFt49IIK5VcOzGwDJCZrcG9_9R-8DOqdn96U760qia5ZXXBSOKa-UJhUWETMmX_mboE3N-kIrVjlzu2DHiDy5x3HudvYwhBm2j2weUT_6XGpbyFMZLq4mKO9-dXtWn-e_YBRoKiqwB3xA5dPgYtfPnN_LUe2DQwk"

axios.get(indeedURL)
.then((response)=>{
    let html = cheerio.load(response.data)

    console.log(
        `Job title: ${html("div h3").text()}\n`,
        `Company: ${html("div h4").text()}\n`
    )

})