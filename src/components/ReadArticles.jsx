import { Button } from "@material-tailwind/react";
import SectionTitle from "./SectionTitle";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";

const ReadArticles = ({articleData}) => {
    const [articles, setArticles] = useState([])
    const [viewAll, setViewAll] = useState(false)

    useEffect(() => {
        if(viewAll){
            setArticles(articleData)
            console.log("all")
        } else{
            setArticles(articleData.slice(0, 3))
            console.log("3")
        }
    }, [viewAll])
    return (
        <div className="mb-24">
            <div>
                <SectionTitle title="Explore Articles to Stay Updated with German Language Guidance" subTitle=" Read article help expand your vocabulary, improve grammar, and understand cultural nuances, making you a more confident and effective speaker."/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    articles?.map(article => <div key={article.id} className="flex flex-col border p-4 shadow rounded-md" data-aos="zoom-in">
                        <img src={article?.image} alt={article.title} className="h-[220px] w-full"/>
                        <h3 className="my-4 text-xl font-bold text-black/75">{article?.title}</h3>
                        <p className="text-black/60 line-clamp-3 flex-1">{article?.description}</p>
                        <Button className="w-fit my-3 bg-[#a38ffd] flex items-center gap-2">Read more <GoArrowRight size={20} /></Button>
                    </div>)
                }
            </div>
            <div className="text-center my-8">
                <Button onClick={() => setViewAll(!viewAll)} variant="outlined" className="border border-[#a38ffd] text-[#957ffa]">{viewAll? "View less" : "View more"}</Button>
            </div>
        </div>
    );
};

export default ReadArticles;

