
import img from "./image/img.png";
import { FiMenu } from "react-icons/fi";
import { HiOutlineTrophy } from "react-icons/hi2";

import { TbCircleLetterA } from "react-icons/tb";

export default function Companytask() {
    return (
        <div className="w-100 m-auto border shadow">

            <h5 className="text-center">Page view</h5>

            <div class="card  w-75 m-auto mt-3" >
                <div class="card-header bg-transparent ">
                    <div className="d-flex justify-content-between">
                        <h4>h<span className="text-warning ">i</span>doc<span className="text-info">r</span></h4>
                        <div>Drugs | Calculators | Articles | News | Quizzes | Surveys | Webinars | Guidelines</div>
                        <div className="d-flex justify-content-between">
                            <FiMenu />
                            <div className="border rounded ms-2">

                                <HiOutlineTrophy /> <span className="text-danger">274 </span>
                            </div>

                            <TbCircleLetterA />


                        </div>
                    </div>
                </div>
                <div className="card-body ">
                    <h5 class="card-title text-center">Your one-stop Solution for <span className="text-info">MEDICAL LEARNING AND UPDATES</span></h5>
                </div>
                <div class="card-footer bg-light-info ">
                    <div className=" d-flex m-auto w-75">
                    Get Knowledge of the  <span className="text-info">APPROVED DRUGS</span>
                <input type="search" className="form-control ms-2 w-25 " placeholder="Enter Drug type"/>
                </div>
                </div>
            </div>
            <div className="d-flex p-3 w-75 m-auto ">
                <div className="text-center">Dailymed Drug Database.The DailyMed database contains 143072 labeeling submitted to<br /> the food and Drug Administration(FDA) by companies. DailyMed does not contain a<br /> complete listing of labeling for FDA-regulated products(e.g,labeling that is not submitted<br /> to the FDA)</div>
                <div className="m-auto">
                    <button className="btn btn-outline-secondary m-1"> Anestheshia</button>
                    <button className="btn btn-outline-secondary m-1">Cardiology</button>
                    <button className="btn btn-outline-secondary m-1">Critical Care</button><br />
                    <button className="btn btn-outline-secondary m-1">Dentistry</button>
                    <button className="btn btn-outline-secondary m-1">Dermatology</button>
                    <button className="btn btn-outline-secondary m-1">Diabetology</button>
                </div>
            </div>
            <div className="d-flex stylew m-auto">
                <div class="card  border-dark text-dark  mb-3 m-2 w-50">
                    <div class="card-header  border-dark text-center"><b>Drug Data</b></div>
                    <div class="card-body text-center">
                        <div class="card-title">Allegtra</div>
                        <div class="card-title">Calpol</div>
                        <div class="card-title">Paracetamol</div>
                        <p class="card-text bg-info shadow">FERRUM OXYDATUM PELLET</p>
                    </div>
                </div>
                <div class="card  border-dark text-dark  mb-3 m-2 w-50">
                    <div class="card-header border-dark text-center"><b>Drug Details</b></div>
                    <div class="card-body text-center">
                        <h5 class="card-title text-info">FERRUM OXYDATUM PELLET</h5>
                        <div class="card-title">gelatin,glycerin,polyethylene glycol, povidone,<br />propylena glycol,Purified water,sorbitol-sorbitan<br /> solution,titanium Dioxide</div>

                    </div>
                </div>

            </div>
            <div className="mx-auto w-75 float-center ">
                <img src={img} alt="this is image" className="img-style" />
            </div>


        </div>
    )
}