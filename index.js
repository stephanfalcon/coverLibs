const axios = require("axios")
const cheerio = require("cheerio")

// let indeedURL = "https://www.indeed.com/viewjob?jk=5847792b24aaf83d&tk=1e58cmckvnhib800&from=serp&vjs=3&advn=1198660448591660&adid=343432832&sjdu=KrExOckDUwcfZdd7bV4mPzSfjhua7l-6nIjy1orA99f-9CF8pZ3iuoFP4vfDMw6Uu6Qf3rclegEBFt49IIK5VcOzGwDJCZrcG9_9R-8DOqdn96U760qia5ZXXBSOKa-UJhUWETMmX_mboE3N-kIrVjlzu2DHiDy5x3HudvYwhBm2j2weUT_6XGpbyFMZLq4mKO9-dXtWn-e_YBRoKiqwB3xA5dPgYtfPnN_LUe2DQwk"
// let indeedURL = "https://www.indeed.com/viewjob?cmp=Smoothstack&t=Entry+Level&jk=29b56b2ad42143b4&sjdu=322giE23uzDyo8M-0RG-glGniBVI_bNMAchsuKxSbGIxHDFHkuRqBVbem-EjKwnGd5DoZKi33Wi-wgZ0XNs8P5K5ucgzst2eVFqdLq6pzvk&tk=1e58cm9qifcdm800&adid=323422383&pub=4a1b367933fd867b19b072952f68dceb&vjs=3"
// let indeedURL ="https://www.indeed.com/viewjob?cmp=Complete-XRM-PlanPlus-Online&t=Front+End+Developer&jk=593405ae2507da96&q=web+Developer&vjs=3"


let indeedURL = "https://www.indeed.com/viewjob?jk=88231e2d785987d5&q=web+Developer&l=Salt+Lake+City%2C+UT&tk=1e5bt3208fcdo800&from=web&vjs=3"

axios.get(indeedURL)
.then((response)=>{
    let $ = cheerio.load(response.data)

    let htmlArr = $("body").children().toArray()

    let lists = $("ul").toArray()

    lists.forEach((data,i)=>{
        if(i<=2){
            // console.log(data.prev.prev.prev)
            if (data.prev.prev.prev.name == "b" || "p"){
                console.log(data.prev.prev.prev.children[0].data)
            }
            else{
                console.log(data.prev.prev.prev.children[0].data)
            }
        }
        if(data.prev != null  && data.prev.data == "\n" ){
            let heading = {
                name:data.prev.prev.prev.name,
                type:data.prev.prev.prev.type,
                content:data.prev.prev.prev.children[0].data,
                children:data.children
            }
            console.log("-",heading.content)
        }else{
            if(data.prev != null ){
                    let heading = {
                    name: data.prev.name,
                    type:data.prev.type,
                    content: data.prev.children[0].data,
                    children: data.prev.children
                }
                if(heading.children[0].type =="tag" ){
                    heading.name = data.prev.children[0].name,
                    heading.type = data.prev.children[0].type,
                    heading.content = data.prev.children[0].children[0].data
                    
                }
                console.log("-",heading.content)
                console.log("")
            }

        }

        
        data.children.forEach((data,i)=>{
            if(data.children[0].data!=undefined){
                console.log(`${i+1}. ${data.children[0].data}`)
            }
            
        })
        console.log("--------------------------------------------------")
        

        // if(i<=0){
        //     if(boldT.name == "b"){
        //         // console.log(boldT.content)
        //         console.log(data)
        //     }
        // }
        // console.log(ifBreak)


        // works!!!!!!!
        // if(i<=3){
        //     data.children.forEach((data,i)=>{
        //         console.log(data.children[0].data)
        //     })
        // }

    })

    // // console.log($("b").text());

    

    

    // // let title = $("h3.jobsearch-JobInfoHeader-title").text()
    // // let company = $("div.jobsearch-InlineCompanyRating").children().text()
    // // let pay = $("div.jobsearch-JobMetadataHeader-item").children().text()
    // let descArray = $("div.jobsearch-jobDescriptionText").children().toArray()
    
    // // console.log(descArray)

    // descArray.forEach((data,i)=>{

    //     // console.log(data)

    //     // if(data.name == "p"){
    //     //     console.log(i)
    //     //     if(data.children[0].name=="b"){
    //     //         console.log(data.children[0].children[0].data)
    //     //     }else{
    //     //         console.log(data.children[0].data)
    //     //     }
    //     //     if(data.next.name=="ul"){            
    //     //         var ulArray = data.next.children
                
    //     //         ulArray.forEach((data,i)=>{
    //     //             // console.log("this is list item")
    //     //             console.log(`${i+1}: ${data.children[0].data}`)
    //     //         })
    //     //     }
    //     // }

    //     // if(data.name == "div"){
    //     //     console.log(i)
    //     //     console.log(data.children[0].data)
    //     // }

    //     // if(data.name == "b"){
    //     //     console.log(i)
    //     //     console.log(data.children[0].data)
    //     // }
    //     if(data.name == "div"){
    //         data = data.children[0]
    //     }else{
    //         if(data.name == "ul"){
    //             console.log(data.prev.children[0].data)
    //             console.log(data.children[0].data)
    //         }
    //     }
    //     if(data.name == "ul"){
    //         console.log(data.prev.children[0].data)
    //         console.log(data.children[0].data)
    //     }
    // })




    // console.log(descriptionEl)
    
    // if (pay == ""){
    //     pay = "pay not specified"
    // }
    // console.log(`
    // ${title}
    // ${company}
    // ${pay}`)
//     $(descriptionEl).each((i,data)=>{
//         // console.log(`<p>${$(data,"p").text()}</p>`)
//         console.log(i)
//         console.log($(data).text())
//         // console.log(`${$(data).html()}`)
//     })
})