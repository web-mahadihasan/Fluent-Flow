import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import VocabularyCard from "../components/VocabularyCard";
import { Button } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";

const LessonDetails = () => {
    const allVocabulary = useLoaderData();
    const navigate = useNavigate()
    const {lessonId} = useParams();
    const [vocabularies, setVocabularies] = useState([])
    const [modaldata, setModalData] = useState({})
    const modalRef = useRef()
    

    useEffect(()=> {
        const filterVocabulary = [...allVocabulary].filter(lesson => lesson.lesson_no == lessonId)
        setVocabularies(filterVocabulary)
    }, [])

    const handleWhenToSay = (vocabulary) => {
        setModalData(vocabulary)
        modalRef.current.showModal()
    }
    return (
        <div className="container mx-auto px-4 xl:px-0 mb-24">
            <Helmet>
                <title>Fluent Flow | Lesson {lessonId}</title>
            </Helmet>
            <div data-aos="fade-up" className="h-[180px] rounded-md justify-center bg-gradient-to-r from-[#c4b8fb] to-[#c4b8fb] my-10 text-3xl font-bold flex items-center gap-2 pl-4">
                <span><img src="https://i.ibb.co.com/Jq6m862/bookmark.gif" alt="" className="w-14"/></span>
                <span>Start Lesson - {lessonId}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    vocabularies?.map(vocabulary => <VocabularyCard key={vocabulary.id} vocabulary={vocabulary} handleWhenToSay={handleWhenToSay} />)
                }
            </div>
            <div className="my-12 text-center">
                <Button onClick={()=> navigate("/start-learning")} variant="outlined" className="border border-[#a38ffd] text-[#9881ff] tracking-wider">Back to Lesson</Button>
            </div>


            {/* Modal box  */}
            <div>
            <div>
                <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box py-10 space-y-2">
                        <h3 className="font-semibold mb-4 text-lg text-black/65 bg-[#a38ffd]/80 p-3 rounded-md">Word: {modaldata?.word}</h3>
                        <div className="ml-6">
                            <p className="text-lg font-semibold text-gray-900">Meaning: <span className="font-normal text-base">{modaldata?.meaning}</span></p>
                            <p className="text-lg font-semibold text-gray-900">When to Say: <span className="font-normal text-base">{modaldata?.when_to_say}</span></p>
                            <p className="text-lg font-semibold text-gray-900">Example: <span className="font-normal text-base">{modaldata?.example}</span></p>
                        </div>
                        <div className="modal-action flex justify-center">
                        <form method="dialog">
                            <Button onClick={()=>document.getElementById('my_modal_5').close()} variant="outlined" className="border border-[#a38ffd] text-[#957ffa] mt-6">Close</Button>
                        </form>
                        </div>
                    </div>
                </dialog>
            </div>
            </div>
        </div>
    );
};

export default LessonDetails;
