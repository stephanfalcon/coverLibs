const axios = require("axios")
const cheerio = require("cheerio")

let indeedURL = "https://www.indeed.com/viewjob?jk=5847792b24aaf83d&tk=1e58cmckvnhib800&from=serp&vjs=3&advn=1198660448591660&adid=343432832&sjdu=KrExOckDUwcfZdd7bV4mPzSfjhua7l-6nIjy1orA99f-9CF8pZ3iuoFP4vfDMw6Uu6Qf3rclegEBFt49IIK5VcOzGwDJCZrcG9_9R-8DOqdn96U760qia5ZXXBSOKa-UJhUWETMmX_mboE3N-kIrVjlzu2DHiDy5x3HudvYwhBm2j2weUT_6XGpbyFMZLq4mKO9-dXtWn-e_YBRoKiqwB3xA5dPgYtfPnN_LUe2DQwk"
// let indeedURL = "https://www.indeed.com/viewjob?cmp=Smoothstack&t=Entry+Level&jk=29b56b2ad42143b4&sjdu=322giE23uzDyo8M-0RG-glGniBVI_bNMAchsuKxSbGIxHDFHkuRqBVbem-EjKwnGd5DoZKi33Wi-wgZ0XNs8P5K5ucgzst2eVFqdLq6pzvk&tk=1e58cm9qifcdm800&adid=323422383&pub=4a1b367933fd867b19b072952f68dceb&vjs=3"

axios.get(indeedURL)
.then((response)=>{
    let $ = cheerio.load(response.data)

    // let title = $("h3.jobsearch-JobInfoHeader-title").text()
    // let company = $("div.jobsearch-InlineCompanyRating").children().text()
    // let pay = $("div.jobsearch-JobMetadataHeader-item").children().text()
    let descriptionEl = $("div.jobsearch-jobDescriptionText").children()


    // console.log(descriptionEl)
    
    // if (pay == ""){
    //     pay = "pay not specified"
    // }
    // console.log(`
    // ${title}
    // ${company}
    // ${pay}`)
    $(descriptionEl).each((i,data)=>{
        // console.log(`<p>${$(data,"p").text()}</p>`)
        console.log(i)
        console.log($(data).text())
        // console.log(`${$(data).html()}`)
    })
})