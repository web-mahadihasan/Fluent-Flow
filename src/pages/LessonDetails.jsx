import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import VocabularyCard from "../components/VocabularyCard";

const LessonDetails = () => {
    const allVocabulary = useLoaderData();
    const {lessonId} = useParams();
    const [vocabularies, setVocabularies] = useState([])

    useEffect(()=> {
        const filterVocabulary = [...allVocabulary].filter(lesson => lesson.lesson_no == lessonId)
        setVocabularies(filterVocabulary)
    }, [])
    return (
        <div className="container mx-auto px-4 xl:px-0">
            <h4 className="my-6 text-2xl font-bold flex items-center gap-2 pl-4">
                <span><img src="https://i.ibb.co.com/Jq6m862/bookmark.gif" alt="" className="w-14"/></span>
                <span>Start Lesson - {lessonId}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    vocabularies.map(vocabulary => <VocabularyCard key={vocabulary.id} vocabulary={vocabulary} />)
                }
            </div>
        </div>
    );
};

export default LessonDetails;