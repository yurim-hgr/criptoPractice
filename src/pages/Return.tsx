import { useState } from "react";
import { useParams } from "react-router-dom";

interface RouteParams{
    type: string;
}
const passageChange = 
    {
        "name":"지문변형",
         "id":1,
        "result":{
            "passage":"Winning turns on a self‐conscious awareness that others are watching and it’s a lot easier to move under the radar when no one knows you and no one is paying attention. But as soon as you start to win, and others start to notice, you’re suddenly aware that you’re being observed and you’re being judged. You worry that others will discover your flaws and weaknesses, and you start hiding your true personality, so you can be a good role model and good citizen and a leader that others can respect but if you do it at the expense of being who you really are, making decisions that please others instead of pleasing yourself, you’re not going to be in that position very long. When you start apologizing for who you are, you stop growing and you stop winning permanently.",
            "translation":"승리는 다른 사람들이 지켜보고 있다는 자의식을 갖게 하며, 아무도 당신을 모르고 아무도 주의를 기울이지 않을 때 레이더 아래로 움직이는 것이 훨씬 더 쉽습니다. 그러나 당신이 이기기 시작하고 다른 사람들이 알아차리기 시작하자마자 당신은 갑자기 당신이 관찰되고 있고 평가받고 있다는 것을 깨닫게 됩니다. 당신은 다른 사람들이 당신의 결점과 약점을 발견할 것이라고 걱정하고 당신의 진정한 성격을 숨기기 시작합니다. 그래서 당신은 다른 사람들이 존경할 수 있는 훌륭한 역할 모델, 좋은 시민, 리더가 될 수 있습니다. 즉, 자신을 기쁘게 하는 대신 다른 사람을 기쁘게 하는 결정을 내리면 그 위치에 오래 머물지 못할 것입니다. 당신이 누구인지에 대해 사과하기 시작하면 성장이 멈추고 영구적으로 승리하는 것이 중단됩니다."
        }
    }

function PassageInsert() {
    // const {type}= useParams<RouteParams>();
    // console.log(type)
    // const [passage , setPassage ] = useState([]);

    return (
        <>
            <h1>
                {passageChange.name}
            </h1>
            <div>
                {passageChange.result.passage}
            </div>
            <div>
                {passageChange.result.translation}
            </div>
        </>
    )
}


export default PassageInsert;