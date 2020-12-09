/*
 * 選太君 entry.js
 */

//
var ENGLISH_WRITE             = "englishWrite";              //英語リーディング
var ENGLISH_LISTENING         = "englishListening";          //英語リスニング
var JAPANESE                  = "japanese";                  //国語
var MODERN_JAPANESE           = "modernJapanese";            //現代文
var ANCIENT_WRITINGS          = "ancientWritings";           //古文
var CHINESE_WRITINGS          = "chineseWritings";           //漢文
var NEW_MATH_ONE              = "newMathOne";                //新課程・数学Ⅰ
var NEW_MATH_ONE_A            = "newMathOneA";               //新課程・数学ⅠＡ
var NEW_MATH_TOW              = "newMathTow";                //新課程・数学Ⅱ
var NEW_MATH_TOW_B            = "newMathTowB";               //新課程・数学ⅡＢ
var OLD_MATH_ONE              = "oldMathOne";                //旧課程・数学Ⅰ
var OLD_MATH_ONE_A            = "oldMathOneA";               //旧課程・数学ⅠＡ
var OLD_MATH_TOW_B            = "oldMathTowB";               //旧課程・数学ⅡＢ
var JAPANESE_HISTORY_B        = "japaneseHistoryB";          //日本史Ｂ
var WORLD_HISTORY_B           = "worldHistoryB";             //世界史Ｂ
var GEOGRAPHY_B               = "geographyB";                //地理Ｂ
var JAPANESE_HISTORY_A        = "japaneseHistoryA";          //日本史Ａ
var WORLD_HISTORY_A           = "worldHistoryA";             //世界史Ａ
var GEOGRAPHY_A               = "geographyA";                //地理Ａ
var MODERN_SOCIETY            = "modernSociety";             //現代社会
var ETHICS                    = "ethics";                    //倫理
var POLITICS_ECONOMICS        = "politiceEconomics";         //政治経済
var ETHICS_POLITICS_ECONOMICS = "ethicsPoliticsEconomics";   //倫理、政治経済
var BASIC_PHYSICAL_SCIENCE    = "basicPhysicalScience";      //理科・新課程・物理基礎
var BASIC_SCIENCE             = "basicScience";              //理科・新課程・化学基礎
var BASIC_BIOLOGY             = "basicBiology";              //理科・新課程・生物基礎
var BASIC_EARTH_SCIENCE       = "basicEarthScience";         //理科・新課程・地学基礎
var PHYSICAL_SCIENCE          = "physicalScience";           //理科・新課程・物理
var SCIENCE                   = "science";                   //理科・新課程・化学
var BIOLOGY                   = "biology";                   //理科・新課程・生物
var EARTH_SCIENCE             = "earthScience";              //理科・新課程・地学
var PHYSICAL_SCIENCE_ONE      = "physicalScienceOne";        //理科・旧課程・物理Ⅰ
var SCIENCE_ONE               = "scienceOne";                //理科・旧課程・化学Ⅰ
var BIOLOGY_ONE               = "biologyOne";                //理科・旧課程・生物Ⅰ
var EARTH_SCIENCE_ONE         = "earthScienceOne";           //理科・旧課程・地学Ⅰ
var TOTAL_SCIENCE_A           = "totalScienceA";             //理科・旧課程・理科総合Ａ
var TOTAL_SCIENCE_B           = "totalScienceB";             //理科・旧課程・理科総合Ｂ


//二次型模試
var TRIAL_JAPANESE                  = "trialJapanese";                   //国語
var TRIAL_MODERN_JAPANESE           = "trialModernJapanese";             //現代文
var TRIAL_MATH                      = "trialMath";                       //数学
var TRIAL_ENGLISH                   = "trialEnglish";                    //英語
var TRIAL_PHYSICAL_SCIENCE          = "trialPhysicalScience";            //物理
var TRIAL_BIOLOGY                   = "trialBiology";                    //生物
var TRIAL_SCIENCE                   = "trialScience";                    //化学
var TRIAL_EARTH_SCIENCE             = "trialEarthScience";               //地学
var TRIAL_WORLD_HISTORY             = "trialWorldHistory";               //世界史
var TRIAL_JAPANESE_HISTORY          = "trialJapaneseHistory";            //日本史
var TRIAL_GEOGRAPHY                 = "trialGeography";                  //地理
var TRIAL_MODERN_SOCIETY            = "trialModernSociety";              //現代社会
var TRIAL_ETHICS                    = "trialEthics";                     //倫理
var TRIAL_ETHICS_POLITICS_ECONOMICS = "trialEthicsPoliticsEconomics";    //政経・倫理

//最大件数
//Update:【PD0101_インターネット選太君】地域選択肢の選択可能数変更  2017/09/13 SG START
//var Max_Pretecture = 3;       //地域選択最大件数
var Max_Pretecture = 5;       //地域選択最大件数
//Update:【PD0101_インターネット選太君】地域選択肢の選択可能数変更  2017/09/13 SG END
var Max_Department = 6;       //系統選択最大件数
var Max_University = 20;      //大学選択最大件数

//
function valueOnchange(obj,maxScore) {
	var result;

	 result=checkCenterRule1(obj,maxScore);
	if (!result)
	{
		obj.value="";
	}
	else
	{
		checkCenterRule2(obj);
		checkCenterRule3(obj);
	}
	checkCenterRule4();
}

//
function checkCenterRule1(obj,maxScore){
	var reExp=new RegExp("^[1-9]{1}[0-9]{0,3}$");
	var reExpNull,val;
	var strVal;

	val=obj.value;

	if (val=="" || val=="0")
	{
		return true;
	}
	strVal=val;
	reExpNull=strVal.match(reExp);
	if (reExpNull==null )
	{
		window.alert(val +"：配点(" + maxScore + ")を超えている得点や数字でない文字は入力できません。");
		obj.focus();
		return false;
	}
	else if (strVal <= maxScore)
	{
		return true;
	}
	else
	{
		window.alert(val +"：配点(" + maxScore + ")を超えている得点や数字でない文字は入力できません。");
		obj.focus();
		return false;
	}
}

function checkCenterRule2(obj)
{
	//同時入力の制限
	//国語
	if (obj.name == JAPANESE)
	{
		if (obj.value == "")
		{
			document.getElementById(MODERN_JAPANESE).value = "";
			document.getElementById(ANCIENT_WRITINGS).value = "";
			document.getElementById(CHINESE_WRITINGS).value = "";
			setEnable(JAPANESE);
		}
		else{
			var val = obj.value;
			setDisable(JAPANESE);
			setEnable(obj.id);
			obj.value = val;
		}
	}
 	//数学１(新課程・数学I、新課程・数学IA、旧課程・数学I、旧課程・数学IA)
 	else if (obj.name == NEW_MATH_ONE || obj.name == NEW_MATH_ONE_A
 	  	 ||  obj.name == OLD_MATH_ONE || obj.name == OLD_MATH_ONE_A)
 	{

 		if (obj.value == ""){
 			if (getMathOneCount() == 0)
 			{
	 			setEnable(NEW_MATH_ONE);
 				setEnable(NEW_MATH_ONE_A);
 				setEnable(OLD_MATH_ONE);
 				setEnable(OLD_MATH_ONE_A);
 			}
 		}
 		else
 		{
 			var val = obj.value;
 			setDisable(NEW_MATH_ONE);
 			setDisable(NEW_MATH_ONE_A);
 			setDisable(OLD_MATH_ONE);
 			setDisable(OLD_MATH_ONE_A);
 			setEnable(obj.id);
 			obj.value = val;
 		}
 	}
 	//数学２(新課程・数学II、新課程・数学IIB、旧課程・数学IIB)
 	else if (obj.name == NEW_MATH_TOW || obj.name == NEW_MATH_TOW_B || obj.name == OLD_MATH_TOW_B)
 	{
 		if (obj.value == "")
 		{
 			if (getMathTwoCount() == 0)
 			{
	 			setEnable(NEW_MATH_TOW);
 				setEnable(NEW_MATH_TOW_B);
 				setEnable(OLD_MATH_TOW_B);
 			}
 		}
 		else
 		{
 			intObjVal=obj.value;
 			setDisable(NEW_MATH_TOW);
 			setDisable(NEW_MATH_TOW_B);
 			setDisable(OLD_MATH_TOW_B);
 			setEnable(obj.id);
 			obj.value=intObjVal;
 		}
 	}
	//地理歴史・公民（世界史A）
	else if (obj.name == WORLD_HISTORY_A)
	{
		if (obj.value == "")
		{
			setEnable(WORLD_HISTORY_B);
		}
		else
		{
			var val = obj.value;
			setDisable(WORLD_HISTORY_B);
			setEnable(WORLD_HISTORY_A);
			obj.value = val;
		}
	}
	//地理歴史・公民（世界史B）
	else if (obj.name == WORLD_HISTORY_B)
	{
		if (obj.value=="")
		{
			setEnable(WORLD_HISTORY_A);
		}
		else
		{
			var val = obj.value;
			setDisable(WORLD_HISTORY_A);
			setEnable(WORLD_HISTORY_B);
			obj.value = val;
		}
	}
	//地理歴史・公民（日本史A）
	else if (obj.name == JAPANESE_HISTORY_A)
	{
		if (obj.value == "")
		{
			setEnable(JAPANESE_HISTORY_B);
		}
		else
		{
			var val = obj.value;
			setDisable(JAPANESE_HISTORY_B);
			setEnable(JAPANESE_HISTORY_A);
			obj.value = val;
		}
	}
	//地理歴史・公民（日本史B）
	else if (obj.name == JAPANESE_HISTORY_B)
	{
		if (obj.value == "")
		{
			setEnable(JAPANESE_HISTORY_A);
		}
		else
		{
			var val = obj.value;
			setDisable(JAPANESE_HISTORY_A);
			setEnable(JAPANESE_HISTORY_B);
			obj.value = val;
		}
	}
	//地理歴史・公民（地理A）
	else if (obj.name == GEOGRAPHY_A)
	{
		if (obj.value == ""){
			setEnable(GEOGRAPHY_B);
		}
		else
		{
			var val = obj.value;
			setDisable(GEOGRAPHY_B);
			setEnable(GEOGRAPHY_A);
			obj.value = val;
		}
	}
	//地理歴史・公民（地理B）
	else if (obj.name == GEOGRAPHY_B)
	{
		if (obj.value == "")
		{
			setEnable(GEOGRAPHY_A);
		}
		else
		{
			var val = obj.value;
			setDisable(GEOGRAPHY_A);
			setEnable(GEOGRAPHY_B);
			obj.value = val;
		}
	}
	//地理歴史・公民（倫理）
	else if (obj.name == ETHICS){
		if (obj.value == "")
		{
			if(document.getElementById(POLITICS_ECONOMICS).value == "")
			{
				setEnable(ETHICS_POLITICS_ECONOMICS);
			}
		}
		else
		{
			var val = obj.value;
			setDisable(ETHICS_POLITICS_ECONOMICS);
			setEnable(ETHICS);
			obj.value = val;
		}
	}
	//地理歴史・公民（政治経済）
	else if (obj.name == POLITICS_ECONOMICS)
	{
		if (obj.value == "")
		{
			if(document.getElementById(ETHICS).value == "")
			{
				setEnable(ETHICS_POLITICS_ECONOMICS);
			}
		}
		else
		{
			var val = obj.value;
			setDisable(ETHICS_POLITICS_ECONOMICS);
			setEnable(POLITICS_ECONOMICS);
			obj.value = val;
		}
	}
	//地理歴史・公民（倫理・政治経済）
	else if (obj.name == ETHICS_POLITICS_ECONOMICS)
	{
		if (obj.value == "")
		{
			setEnable(ETHICS);
			setEnable(POLITICS_ECONOMICS);
		}
		else
		{
			var val = obj.value;
			setDisable(ETHICS);
			setDisable(POLITICS_ECONOMICS);
			setEnable(ETHICS_POLITICS_ECONOMICS);
			obj.value = val;
		}
	}
	//新課程・理科・基礎
	else if (obj.name == BASIC_PHYSICAL_SCIENCE || obj.name == BASIC_SCIENCE ||
			 obj.name == BASIC_BIOLOGY || obj.name == BASIC_EARTH_SCIENCE)
	{
		if (obj.value == "")
		{
			if (getNewBasicScienceCount() == 0 &&
				getNewSpecialScienceCount() == 0)
			{
				if (document.getElementById("selectNewS").value == "000")
				{
					//旧課程の第1解答科目をRESET
					setAllOldScienceEnable();
					setOldScienceList(false);
					setNewScienceList(false);
				}
			}
			else if (getNewBasicScienceCount() == 0 &&
					getNewSpecialScienceCount() >= 1)
			{
				setAllNewdSpecialScienceEnable();
			}
			else if (getNewBasicScienceCount() == 1 &&
					getNewSpecialScienceCount() == 1)
			{
				setNewdScienceEnable();
				setNewdSpecialScienceDisable();
			}
				else if(getNewBasicScienceCount() == 1)
			{
				setNewdScienceEnable();
				setAllNewdSpecialScienceEnable();
			}
		}
		else
		{
			//旧課程の第1解答科目をRESET
			setAllOldScienceDisable();
			setOldScienceList(true);
			if (getNewBasicScienceCount() >= 2)
			{
				setNewdScienceDisable();
			}
			if (getNewSpecialScienceCount() >= 1)
			{
				setNewdSpecialScienceDisable();
			}
		}
	}
	//新課程・理科・専門
	else if (obj.name == PHYSICAL_SCIENCE || obj.name == SCIENCE ||
			 obj.name == BIOLOGY || obj.name == EARTH_SCIENCE)
	{
		if (getNewBasicScienceCount() == 0)
		{
			if (obj.value == "")
			{
				if (getNewSpecialScienceCount() == 0)
				{
					if (document.getElementById("selectNewS").value == "000")
					{
						//旧課程の第1解答科目をRESET
						setAllOldScienceEnable();
						setOldScienceList(false);
						setNewScienceList(false);
					}
				}
				else if(getNewSpecialScienceCount() == 1)
				{
					setNewdScienceEnable();
					setNewdSpecialScienceEnable();
				}
			}
			else
			{
				//旧課程の第1解答科目をRESET
				setAllOldScienceDisable();
				setOldScienceList(true);
				if (getNewSpecialScienceCount() >= 2)
				{
					setNewdScienceDisable();
					setNewdSpecialScienceDisable();
				}
				else
				{
					setNewdSpecialScienceEnable();
				}
			}
		}
		else if(getNewBasicScienceCount() >= 1)
		{
			if (obj.value == "")
			{
				setNewdSpecialScienceEnable();
			}
			else
			{
				setNewdSpecialScienceDisable();
			}
		}
	}
	//旧課程・理科
	else if (obj.name == PHYSICAL_SCIENCE_ONE || obj.name == SCIENCE_ONE ||
			 obj.name == BIOLOGY_ONE || obj.name == EARTH_SCIENCE_ONE ||
			 obj.name == TOTAL_SCIENCE_A || obj.name == TOTAL_SCIENCE_B)
	{
		var cnt = getOldScienceCount();
		if (cnt == 0)
		{
			if (document.getElementById("selectOldS").value == "000")
			{
				setNewdScienceEnable();
				setNewdSpecialScienceEnable();
				setNewScienceList(false);
				setOldScienceList(false);
			}
		}
		else if (cnt == 1)
		{
			setNewdScienceDisable();
			setNewdSpecialScienceDisable();
			setNewScienceList(true);
			setOldScienceEnable();
		}
		else if (cnt >= 2)
		{
			setOldScienceDisable();
		}
	}

}

//新課程・理科・基礎
function getNewBasicScienceCount()
{
	var icnt;
	icnt = 0;
	//新課程・物理基礎
	if (document.getElementById(BASIC_PHYSICAL_SCIENCE).value != "")
	{
		++icnt;
	}
	//新課程・化学基礎
	if (document.getElementById(BASIC_SCIENCE).value != "")
	{
		++icnt;
	}
	//新課程・生物基礎
	if (document.getElementById(BASIC_BIOLOGY).value !="")
	{
		++icnt;
	}
	//新課程・地学基礎
	if (document.getElementById(BASIC_EARTH_SCIENCE).value != "")
	{
		++icnt;
	}
	return icnt;
}

//新課程・理科・専門
function getNewSpecialScienceCount()
{
	var icnt;
	icnt = 0;
	//新課程・物理
	if (document.getElementById(PHYSICAL_SCIENCE).value != "")
	{
		++icnt;
	}
	//新課程・化学
	if (document.getElementById(SCIENCE).value != "")
	{
		++icnt;
	}
	//新課程・生物
	if (document.getElementById(BIOLOGY).value != "")
	{
		++icnt;
	}
	//新課程・地学
	if (document.getElementById(EARTH_SCIENCE).value != "")
	{
		++icnt;
	}
	return icnt;
}

//旧課程・理科
function getOldScienceCount()
{
	var icnt;
	icnt = 0;
	//旧課程・物理I
	if (document.getElementById(PHYSICAL_SCIENCE_ONE).value != "")
	{
		++icnt;
	}
	//旧課程・化学I
	if (document.getElementById(SCIENCE_ONE).value != "")
	{
		++icnt;
	}
	//旧課程・生物I
	if (document.getElementById(BIOLOGY_ONE).value != "")
	{
		++icnt;
	}
	//旧課程・地学I
	if (document.getElementById(EARTH_SCIENCE_ONE).value != "")
	{
		++icnt;
	}
	//旧課程・理科総合A
	if (document.getElementById(TOTAL_SCIENCE_A).value != "")
	{
		++icnt;
	}
	//旧課程・理科総合B
	if (document.getElementById(TOTAL_SCIENCE_B).value != "")
	{
		++icnt;
	}
	return icnt;
}

//旧課程・理科
function setAllOldScienceDisable()
{
	//旧課程・物理I
	setDisable(PHYSICAL_SCIENCE_ONE);
	//旧課程・化学I
	setDisable(SCIENCE_ONE);
	//旧課程・生物I
	setDisable(BIOLOGY_ONE);
	//旧課程・地学I
	setDisable(EARTH_SCIENCE_ONE);
	//旧課程・理科総合A
	setDisable(TOTAL_SCIENCE_A);
	//旧課程・理科総合B
	setDisable(TOTAL_SCIENCE_B);
}

//旧課程・理科
function setAllOldScienceEnable()
{
	//旧課程・物理I
	setEnable(PHYSICAL_SCIENCE_ONE);
	//旧課程・化学I
	setEnable(SCIENCE_ONE);
	//旧課程・生物I
	setEnable(BIOLOGY_ONE);
	//旧課程・地学I
	setEnable(EARTH_SCIENCE_ONE);
	//旧課程・理科総合A
	setEnable(TOTAL_SCIENCE_A);
	//旧課程・理科総合B
	setEnable(TOTAL_SCIENCE_B);
}

//新課程・理科・基礎課程
function setNewdScienceEnable()
{
	//新課程・物理基礎
	if (document.getElementById(BASIC_PHYSICAL_SCIENCE).value == "")
	{
		setEnable(BASIC_PHYSICAL_SCIENCE);
	}
	//新課程・化学基礎
	if (document.getElementById(BASIC_SCIENCE).value == "")
	{
		setEnable(BASIC_SCIENCE);
	}
	//新課程・生物基礎
	if (document.getElementById(BASIC_BIOLOGY).value =="")
	{
		setEnable(BASIC_BIOLOGY);
	}
	//新課程・地学基礎
	if (document.getElementById(BASIC_EARTH_SCIENCE).value == "")
	{
		setEnable(BASIC_EARTH_SCIENCE);
	}
}

//新課程・理科・基礎課程
function setNewdScienceDisable()
{
	//新課程・物理基礎
	if (document.getElementById(BASIC_PHYSICAL_SCIENCE).value == "")
	{
		setDisable(BASIC_PHYSICAL_SCIENCE);
	}
	//新課程・化学基礎
	if (document.getElementById(BASIC_SCIENCE).value == "")
	{
		setDisable(BASIC_SCIENCE);
	}
	//新課程・生物基礎
	if (document.getElementById(BASIC_BIOLOGY).value =="")
	{
		setDisable(BASIC_BIOLOGY);
	}
	//新課程・地学基礎
	if (document.getElementById(BASIC_EARTH_SCIENCE).value == "")
	{
		setDisable(BASIC_EARTH_SCIENCE);
	}
}

//新課程・理科・基礎課程
function setAllNewdBasicScienceEnable()
{
	setEnable(BASIC_PHYSICAL_SCIENCE);
	setEnable(BASIC_SCIENCE);
	setEnable(BASIC_BIOLOGY);
	setEnable(BASIC_EARTH_SCIENCE);
}


function setAllNewdBasicScienceDisable()
{
	setDisable(BASIC_PHYSICAL_SCIENCE);
	setDisable(BASIC_SCIENCE);
	setDisable(BASIC_BIOLOGY);
	setDisable(BASIC_EARTH_SCIENCE);
}

//新課程・理科・専門課程
function setAllNewdSpecialScienceEnable()
{
	//新課程・物理
	setEnable(PHYSICAL_SCIENCE);
	//新課程・化学
	setEnable(SCIENCE);
	//新課程・生物
	setEnable(BIOLOGY);
	//新課程・地学
	setEnable(EARTH_SCIENCE);
}

function setAllNewdSpecialScienceDisable()
{
	//新課程・物理
	setDisable(PHYSICAL_SCIENCE);
	//新課程・化学
	setDisable(SCIENCE);
	//新課程・生物
	setDisable(BIOLOGY);
	//新課程・地学
	setDisable(EARTH_SCIENCE);
}

//新課程・理科・専門課程
function setNewdSpecialScienceDisable()
{
	//新課程・物理
	if (document.getElementById(PHYSICAL_SCIENCE).value == "")
	{
		setDisable(PHYSICAL_SCIENCE);
	}
	//新課程・化学
	if (document.getElementById(SCIENCE).value == "")
	{
		setDisable(SCIENCE);
	}
	//新課程・生物
	if (document.getElementById(BIOLOGY).value =="")
	{
		setDisable(BIOLOGY);
	}
	//新課程・地学
	if (document.getElementById(EARTH_SCIENCE).value == "")
	{
		setDisable(EARTH_SCIENCE);
	}
}

//新課程・理科・専門課程
function setNewdSpecialScienceEnable()
{
	//新課程・物理
	if (document.getElementById(PHYSICAL_SCIENCE).value == "")
	{
		setEnable(PHYSICAL_SCIENCE);
	}
	//新課程・化学
	if (document.getElementById(SCIENCE).value == "")
	{
		setEnable(SCIENCE);
	}
	//新課程・生物
	if (document.getElementById(BIOLOGY).value =="")
	{
		setEnable(BIOLOGY);
	}
	//新課程・地学
	if (document.getElementById(EARTH_SCIENCE).value == "")
	{
		setEnable(EARTH_SCIENCE);
	}
}

//旧課程・理科
function setOldScienceEnable()
{
	//旧課程・物理I
	if (document.getElementById(PHYSICAL_SCIENCE_ONE).value == "")
	{
		setEnable(PHYSICAL_SCIENCE_ONE);
	}
	//旧課程・化学I
	if (document.getElementById(SCIENCE_ONE).value == "")
	{
		setEnable(SCIENCE_ONE);
	}
	//旧課程・生物I
	if (document.getElementById(BIOLOGY_ONE).value == "")
	{
		setEnable(BIOLOGY_ONE);
	}
	//旧課程・地学I
	if (document.getElementById(EARTH_SCIENCE_ONE).value == "")
	{
		setEnable(EARTH_SCIENCE_ONE);
	}
	//旧課程・理科総合A
	if (document.getElementById(TOTAL_SCIENCE_A).value == "")
	{
		setEnable(TOTAL_SCIENCE_A);
	}
	//旧課程・理科総合B
	if (document.getElementById(TOTAL_SCIENCE_B).value == "")
	{
		setEnable(TOTAL_SCIENCE_B);
	}
}

//旧課程・理科
function setOldScienceDisable()
{
	//旧課程・物理I
	if (document.getElementById(PHYSICAL_SCIENCE_ONE).value == "")
	{
		setDisable(PHYSICAL_SCIENCE_ONE);
	}
	//旧課程・化学I
	if (document.getElementById(SCIENCE_ONE).value == "")
	{
		setDisable(SCIENCE_ONE);
	}
	//旧課程・生物I
	if (document.getElementById(BIOLOGY_ONE).value == "")
	{
		setDisable(BIOLOGY_ONE);
	}
	//旧課程・地学I
	if (document.getElementById(EARTH_SCIENCE_ONE).value == "")
	{
		setDisable(EARTH_SCIENCE_ONE);
	}
	//旧課程・理科総合A
	if (document.getElementById(TOTAL_SCIENCE_A).value == "")
	{
		setDisable(TOTAL_SCIENCE_A);
	}
	//旧課程・理科総合B
	if (document.getElementById(TOTAL_SCIENCE_B).value == "")
	{
		setDisable(TOTAL_SCIENCE_B);
	}
}

//新課程・第1解答科目ドロップダウンリスト
function setNewScienceList(val)
{
	document.getElementById("selectNewS").disabled = val;
	if (val == true)
	{
		document.getElementById("selectNewS").style.background = "silver";
	}
	if (val == true && document.getElementById("selectNewS").selectedIndex != 0)
	{
		document.getElementById("selectNewS").selectedIndex = 0;
	}
	if (val == false)
	{
		document.getElementById("selectNewS").selectedIndex = 0;
		document.getElementById("selectNewS").style.background = "white";
	}
}

//旧課程・第1解答科目ドロップダウンリスト
function setOldScienceList(val)
{
	document.getElementById("selectOldS").disabled = val;
	if (val == true)
	{
		document.getElementById("selectOldS").style.background = "silver";
	}
	if (val == true && document.getElementById("selectOldS").selectedIndex != 0)
	{
		document.getElementById("selectOldS").selectedIndex = 0;
	}
	if (val == false)
	{
		document.getElementById("selectOldS").selectedIndex = 0;
		document.getElementById("selectOldS").style.background = "white";
	}
}

function checkCenterRule3(obj)
{
	// (3)国語と現代文、古文、漢文の合計点チェック
	switch (obj.name){
		case JAPANESE:
			checkCenterRule3Sub();
			break;
		case MODERN_JAPANESE:
			checkCenterRule3Sub();
			break;
		case ANCIENT_WRITINGS:
			checkCenterRule3Sub();
			break;
		case CHINESE_WRITINGS:
			checkCenterRule3Sub();
			break;
		default:
	}
}

function checkCenterRule3Sub()
{
	// (3)国語と現代文、古文、漢文の合計点チェック-sub
	var blnCnd1;
	var blnCnd2;
	var blnCnd3;
	var intTotal1,intTotal2,iC310,iC320,iC330,iC301;

	blnCnd1= (document.getElementById(JAPANESE).value=="");
	blnCnd2= document.getElementById(MODERN_JAPANESE).value != "" ||
	         document.getElementById(ANCIENT_WRITINGS).value != "" ||
	         document.getElementById(CHINESE_WRITINGS).value != "";

	if(blnCnd1)
	{
		if (blnCnd2)
		{
			window.alert("国語の得点を先に入力してください。");
			document.getElementById(MODERN_JAPANESE).value="";
			document.getElementById(ANCIENT_WRITINGS).value="";
			document.getElementById(CHINESE_WRITINGS).value="";
			document.getElementById(JAPANESE).focus();
		}
		else
		{
		}
	}
	else
	{
		if (blnCnd2)
		{
			iC310 = (isNaN(parseInt(document.getElementById(MODERN_JAPANESE).value))?0:parseInt(document.getElementById(MODERN_JAPANESE).value));
			iC320 = (isNaN(parseInt(document.getElementById(ANCIENT_WRITINGS).value))?0:parseInt(document.getElementById(ANCIENT_WRITINGS).value));
			iC330 = (isNaN(parseInt(document.getElementById(CHINESE_WRITINGS).value))?0:parseInt(document.getElementById(CHINESE_WRITINGS).value));
			intTotal1= iC310 + iC320 + iC330 ;
			iC301 = (isNaN(parseInt(document.getElementById(JAPANESE).value))?0:parseInt(document.getElementById(JAPANESE).value));
			intTotal2 = iC301;
			blnCnd3 = (intTotal1 <= intTotal2);
			if (blnCnd3)
			{
			}
			else
			{
				window.alert("国語の内訳得点の組み合わせが誤っています。");
				document.getElementById(MODERN_JAPANESE).value="";
				document.getElementById(ANCIENT_WRITINGS).value="";
				document.getElementById(CHINESE_WRITINGS).value="";
				document.getElementById(MODERN_JAPANESE).focus();
			}
		}
		else
		{
		}
	}
}

function checkCenterRule4()
{
	//　同時入力の制限
	//　地歴公民
	var icnt;
	icnt = 0;
	if (document.getElementById(JAPANESE_HISTORY_B).value != "")
	{
		++icnt;
	}
	if (document.getElementById(WORLD_HISTORY_B).value != "")
	{
		++icnt;
	}
	if (document.getElementById(GEOGRAPHY_B).value !="")
	{
		++icnt;
	}
	if (document.getElementById(JAPANESE_HISTORY_A).value != "")
	{
		++icnt;
	}
	if (document.getElementById(WORLD_HISTORY_A).value != "")
	{
		++icnt;
	}
	if (document.getElementById(GEOGRAPHY_A).value != "")
	{
		++icnt;
	}
	if (document.getElementById(MODERN_SOCIETY).value != "")
	{
		++icnt;
	}
	if (document.getElementById(ETHICS).value != "")
	{
		++icnt;
	}
	if (document.getElementById(POLITICS_ECONOMICS).value != "")
	{
		++icnt;
	}
	if (document.getElementById(ETHICS_POLITICS_ECONOMICS).value != "")
	{
		++icnt;
	}

	if (icnt < 2)
	{
		if (document.getElementById(JAPANESE_HISTORY_B).value == ""){setEnable(JAPANESE_HISTORY_A);}	//日本史Ｂ
		if (document.getElementById(WORLD_HISTORY_B).value == ""){setEnable(WORLD_HISTORY_A);}	//世界史Ｂ
		if (document.getElementById(GEOGRAPHY_B).value == ""){setEnable(GEOGRAPHY_A);}	//地理Ｂ
		if (document.getElementById(JAPANESE_HISTORY_A).value == ""){setEnable(JAPANESE_HISTORY_B);}	//日本史Ａ
		if (document.getElementById(WORLD_HISTORY_A).value == ""){setEnable(WORLD_HISTORY_B);}	//世界史Ａ
		if (document.getElementById(GEOGRAPHY_A).value == ""){setEnable(GEOGRAPHY_B);}	//地理Ａ
		if (document.getElementById(MODERN_SOCIETY).value == ""){setEnable(MODERN_SOCIETY);}	//現代社会

		if (document.getElementById(ETHICS).value == "")
		{
			if (document.getElementById(POLITICS_ECONOMICS).value == "")
			{
				setEnable(ETHICS_POLITICS_ECONOMICS);
			}
		}	//倫理 と政治経済

		if (document.getElementById(ETHICS_POLITICS_ECONOMICS).value == "")
		{
			setEnable(ETHICS);
			setEnable(POLITICS_ECONOMICS);
		}	//倫理、政治経済
	}
	else
	{
		if (document.getElementById(JAPANESE_HISTORY_B).value == ""){setDisable(JAPANESE_HISTORY_B);}
		if (document.getElementById(WORLD_HISTORY_B).value == ""){setDisable(WORLD_HISTORY_B);}
		if (document.getElementById(GEOGRAPHY_B).value == ""){setDisable(GEOGRAPHY_B);}
		if (document.getElementById(JAPANESE_HISTORY_A).value == ""){setDisable(JAPANESE_HISTORY_A);}
		if (document.getElementById(WORLD_HISTORY_A).value == ""){setDisable(WORLD_HISTORY_A);}
		if (document.getElementById(GEOGRAPHY_A).value == ""){setDisable(GEOGRAPHY_A);}
		if (document.getElementById(MODERN_SOCIETY).value == ""){setDisable(MODERN_SOCIETY);}
		if (document.getElementById(ETHICS).value == ""){setDisable(ETHICS);}
		if (document.getElementById(POLITICS_ECONOMICS).value == ""){setDisable(POLITICS_ECONOMICS);}
		if (document.getElementById(ETHICS_POLITICS_ECONOMICS).value == ""){setDisable(ETHICS_POLITICS_ECONOMICS);}
	}
}

//------------------------------------------------------------------------------
// 二次型模試入力時チェック
//------------------------------------------------------------------------------
function valueTrialOnchange(obj,maxScore)
{
	if (!checkTrialRule1(obj,maxScore))
	{
		obj.value = "";
	}
	else
	{
		checkTrialRule2(obj);
	}
}

function checkTrialRule1(obj,maxScore)
{
	var reExp=new RegExp("^[1-9]{1}[0-9]{0,3}$");
	var reExpNull;
	var val;
	var strVal;

	val = obj.value;

	if (val=="")
	{
		return true;
	}
	else if (val == "0")
	{
		return true;
	}
 	else
 	{
 		strVal = val;
		reExpNull = strVal.match(reExp);
 		if (reExpNull == null)
 		{
			window.alert(val +"：配点(" + maxScore + ")を超えている得点や数字でない文字は入力できません。");
			obj.focus();
			return false;
		}
		else if (val <= maxScore)
		{
			return  true;
		}
		else
		{
			window.alert(val +"：配点(" + maxScore + ")を超えている得点や数字でない文字は入力できません。");
			obj.focus();
			return false;
		}
	}
}

function checkTrialRule2(obj)
{
	var count;
	var target;

	//(3)同時入力の制限
	//地歴公民
	if (obj.name == TRIAL_WORLD_HISTORY || obj.name == TRIAL_JAPANESE_HISTORY
	||  obj.name == TRIAL_GEOGRAPHY     || obj.name == TRIAL_MODERN_SOCIETY
	||  obj.name == TRIAL_ETHICS        || obj.name == TRIAL_ETHICS_POLITICS_ECONOMICS)
	{
		count = getTrialSocialCount();
		if (obj.value == ""){
			if (count < 2)
			{
				//世界史
				if (document.getElementById(TRIAL_WORLD_HISTORY).disabled == true)
				{
					setEnable(TRIAL_WORLD_HISTORY);
				}
				//日本史
				if (document.getElementById(TRIAL_JAPANESE_HISTORY).disabled == true)
				{
					setEnable(TRIAL_JAPANESE_HISTORY);
				}
				//地理
				if (document.getElementById(TRIAL_GEOGRAPHY).disabled == true)
				{
					setEnable(TRIAL_GEOGRAPHY);
				}
				//現代社会
				if (!(document.getElementById(TRIAL_MODERN_SOCIETY).disabled == true && (document.getElementById("selectDocking").value == "D02" || document.getElementById("selectDocking").value == "D03" || document.getElementById("selectDocking").value == "N02")))
				{
					setEnable(TRIAL_MODERN_SOCIETY);
				}
				//倫理
				if (!(document.getElementById(TRIAL_ETHICS).disabled == true && (document.getElementById("selectDocking").value == "D02" || document.getElementById("selectDocking").value == "D03" || document.getElementById("selectDocking").value == "N02")))
				{
					setEnable(TRIAL_ETHICS);
				}
				//政経・倫政
				if (document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).disabled == true)
				{
					setEnable(TRIAL_ETHICS_POLITICS_ECONOMICS);
				}
			}
		}
		else
		{
			if(count >= 2)
			{
				if (document.getElementById(TRIAL_WORLD_HISTORY).value == "")
				{
					setDisable(TRIAL_WORLD_HISTORY);
				}
				if (document.getElementById(TRIAL_JAPANESE_HISTORY).value == "")
				{
					setDisable(TRIAL_JAPANESE_HISTORY);
				}
				if (document.getElementById(TRIAL_GEOGRAPHY).value == "")
				{
					setDisable(TRIAL_GEOGRAPHY);
				}
				if (document.getElementById(TRIAL_MODERN_SOCIETY).value == "")
				{
					setDisable(TRIAL_MODERN_SOCIETY);
				}
				if (document.getElementById(TRIAL_ETHICS).value == "")
				{
					setDisable(TRIAL_ETHICS);
				}
				if (document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).value == "")
				{
					setDisable(TRIAL_ETHICS_POLITICS_ECONOMICS);
				}
			}
		}
	}
	//理科
	else if (obj.name == TRIAL_PHYSICAL_SCIENCE || obj.name == TRIAL_SCIENCE
		  || obj.name == TRIAL_BIOLOGY          || obj.name == TRIAL_EARTH_SCIENCE)
	{
		count = getTrialScienceCount();
		if (obj.value == "")
		{
			if (count < 2)
			{
				//物理
				if (document.getElementById(TRIAL_PHYSICAL_SCIENCE).disabled == true)
				{
					setEnable(TRIAL_PHYSICAL_SCIENCE);
				}
				//化学
				if (document.getElementById(TRIAL_SCIENCE).disabled == true)
				{
					setEnable(TRIAL_SCIENCE);
				}
				//生物
				if (document.getElementById(TRIAL_BIOLOGY).disabled == true)
				{
					setEnable(TRIAL_BIOLOGY);
				}
				//地学
				if (document.getElementById(TRIAL_EARTH_SCIENCE).disabled == true)
				{
					setEnable(TRIAL_EARTH_SCIENCE);
				}
			}
		}
		else
		{
			if(count >= 2)
			{
				if (document.getElementById(TRIAL_PHYSICAL_SCIENCE).value == "")
				{
					setDisable(TRIAL_PHYSICAL_SCIENCE);
				}
				if (document.getElementById(TRIAL_SCIENCE).value == "")
				{
					setDisable(TRIAL_SCIENCE);
				}
				if (document.getElementById(TRIAL_BIOLOGY).value == "")
				{
					setDisable(TRIAL_BIOLOGY);
				}
				if (document.getElementById(TRIAL_EARTH_SCIENCE).value == "")
				{
					setDisable(TRIAL_EARTH_SCIENCE);
				}
			}
		}
	}
	//国語
	else if (obj.name == TRIAL_JAPANESE || obj.name == TRIAL_MODERN_JAPANESE)
	{
		//国語
		var strJapanese = document.getElementById(TRIAL_JAPANESE).value;
		//現代文
		var strModernJapanese = document.getElementById(TRIAL_MODERN_JAPANESE).value;
		if (strJapanese == "")
		{
			if (strModernJapanese != "")
			{
				//現代文のみ入力
				window.alert("国語の得点を先に入力してください。");
				document.getElementById(TRIAL_MODERN_JAPANESE).value = "";
				target = document.getElementById(TRIAL_JAPANESE);
				target.focus();
			}
		}
		else
		{
			if (strModernJapanese == "")
			{
				//国語のみ入力ＯＫ
			}
			else
			{
				if(parseInt(strJapanese) >= parseInt(strModernJapanese))
				{
					//国語≧現代文ＯＫ
				}
				else
				{
					//国語＜現代文
					window.alert(strJapanese +"：配点を超えている得点や数字でない文字は入力できません。");
					target = document.getElementById(TRIAL_MODERN_JAPANESE);
					target.value = "";
					target.focus();
				}
			}
		}
	}
}

//二次型模・試地歴公民件数
function getTrialSocialCount()
{
	var count = 0;
	if (document.getElementById(TRIAL_WORLD_HISTORY).value != "")
	{
		count++;
	}
	if (document.getElementById(TRIAL_JAPANESE_HISTORY).value != "")
	{
		count++;
	}
	if (document.getElementById(TRIAL_GEOGRAPHY).value != "")
	{
		count++;
	}
	if (document.getElementById(TRIAL_MODERN_SOCIETY).value != "")
	{
		count++;
	}
	if (document.getElementById(TRIAL_ETHICS).value != "")
	{
		count++;
	}
	if (document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).value != "")
	{
		count++;
	}
 	return count;
}

//二次型模試・理科件数
function getTrialScienceCount()
{
	var count = 0;
	if (document.getElementById(TRIAL_PHYSICAL_SCIENCE).value != "")
	{
		count++;
	}
	if (document.getElementById(TRIAL_SCIENCE).value != "")
	{
		count++;
	}
	if (document.getElementById(TRIAL_BIOLOGY).value != "")
	{
		count++;
	}
	if (document.getElementById(TRIAL_EARTH_SCIENCE).value != "")
	{
		count++;
	}
 	return count;
}

//ドッキング判定
function selectDockingOnchange(c)
{
	if(document.getElementById("selectDocking").value == "000")
	{
		trialAllDisable("Clear");
		$("#docking_input").css("display","none");
	}
	else if (document.getElementById("selectDocking").value == "N03")
	{
		trialAllEnable();
		trialRecure();
		$("#docking_input").css("display","block");
	}
	else if(document.getElementById("selectDocking").value == "D02"
	||	    document.getElementById("selectDocking").value == "D03")
	{
		trialAllEnable();
		document.getElementById(TRIAL_MODERN_SOCIETY).disabled=true;
		document.getElementById(TRIAL_ETHICS).disabled=true;
		document.getElementById(TRIAL_MODERN_SOCIETY).style.background="silver";
		document.getElementById(TRIAL_ETHICS).style.background="silver";
		document.getElementById(TRIAL_MODERN_SOCIETY).value="";
		document.getElementById(TRIAL_ETHICS).value="";
		trialRecure();
		$("#docking_input").css("display","block");
	}
	else if(document.getElementById("selectDocking").value=="N02"){
		trialAllEnable();
		document.getElementById(TRIAL_MODERN_SOCIETY).disabled=true;
		document.getElementById(TRIAL_ETHICS).disabled=true;
		document.getElementById(TRIAL_MODERN_SOCIETY).style.background="silver";
		document.getElementById(TRIAL_ETHICS).style.background="silver";
		document.getElementById(TRIAL_MODERN_SOCIETY).value="";
		document.getElementById(TRIAL_ETHICS).value="";
		trialRecure();
		$("#docking_input").css("display","block");
	}
	else{
	}
}

function trialAllDisable(c)
{
	document.getElementById(TRIAL_JAPANESE).disabled=true;
	document.getElementById(TRIAL_MATH).disabled=true;
	document.getElementById(TRIAL_ENGLISH).disabled=true;
	document.getElementById(TRIAL_WORLD_HISTORY).disabled=true;
	document.getElementById(TRIAL_JAPANESE_HISTORY).disabled=true;
	document.getElementById(TRIAL_GEOGRAPHY).disabled=true;
	document.getElementById(TRIAL_MODERN_SOCIETY).disabled=true;
	document.getElementById(TRIAL_ETHICS).disabled=true;
	document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).disabled=true;
	document.getElementById(TRIAL_PHYSICAL_SCIENCE).disabled=true;
	document.getElementById(TRIAL_BIOLOGY).disabled=true;
	document.getElementById(TRIAL_SCIENCE).disabled=true;
	document.getElementById(TRIAL_EARTH_SCIENCE).disabled=true;
	document.getElementById(TRIAL_MODERN_JAPANESE).disabled=true;
	document.getElementById(TRIAL_JAPANESE).style.background="silver";
	document.getElementById(TRIAL_MATH).style.background="silver";
	document.getElementById(TRIAL_ENGLISH).style.background="silver";
	document.getElementById(TRIAL_WORLD_HISTORY).style.background="silver";
	document.getElementById(TRIAL_JAPANESE_HISTORY).style.background="silver";
	document.getElementById(TRIAL_GEOGRAPHY).style.background="silver";
	document.getElementById(TRIAL_MODERN_SOCIETY).style.background="silver";
	document.getElementById(TRIAL_ETHICS).style.background="silver";
	document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).style.background="silver";
	document.getElementById(TRIAL_PHYSICAL_SCIENCE).style.background="silver";
	document.getElementById(TRIAL_BIOLOGY).style.background="silver";
	document.getElementById(TRIAL_SCIENCE).style.background="silver";
	document.getElementById(TRIAL_EARTH_SCIENCE).style.background="silver";
	document.getElementById(TRIAL_MODERN_JAPANESE).style.background="silver";

	if (c=="Clear")
	{
		document.getElementById(TRIAL_JAPANESE).value="";
		document.getElementById(TRIAL_MATH).value="";
		document.getElementById(TRIAL_ENGLISH).value="";
		document.getElementById(TRIAL_WORLD_HISTORY).value="";
		document.getElementById(TRIAL_JAPANESE_HISTORY).value="";
		document.getElementById(TRIAL_GEOGRAPHY).value="";
		document.getElementById(TRIAL_MODERN_SOCIETY).value="";
		document.getElementById(TRIAL_ETHICS).value="";
		document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).value="";
		document.getElementById(TRIAL_PHYSICAL_SCIENCE).value="";
		document.getElementById(TRIAL_BIOLOGY).value="";
		document.getElementById(TRIAL_SCIENCE).value="";
		document.getElementById(TRIAL_EARTH_SCIENCE).value="";
		document.getElementById(TRIAL_MODERN_JAPANESE).value="";
	}
}

function trialAllEnable()
{
	document.getElementById(TRIAL_JAPANESE).disabled=false;
	document.getElementById(TRIAL_MATH).disabled=false;
	document.getElementById(TRIAL_ENGLISH).disabled=false;
	document.getElementById(TRIAL_WORLD_HISTORY).disabled=false;
	document.getElementById(TRIAL_JAPANESE_HISTORY).disabled=false;
	document.getElementById(TRIAL_GEOGRAPHY).disabled=false;
	document.getElementById(TRIAL_MODERN_SOCIETY).disabled=false;
	document.getElementById(TRIAL_ETHICS).disabled=false;
	document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).disabled=false;
	document.getElementById(TRIAL_PHYSICAL_SCIENCE).disabled=false;
	document.getElementById(TRIAL_BIOLOGY).disabled=false;
	document.getElementById(TRIAL_SCIENCE).disabled=false;
	document.getElementById(TRIAL_EARTH_SCIENCE).disabled=false;
	document.getElementById(TRIAL_MODERN_JAPANESE).disabled=false;

	document.getElementById(TRIAL_JAPANESE).style.background="white";
	document.getElementById(TRIAL_MATH).style.background="white";
	document.getElementById(TRIAL_ENGLISH).style.background="white";
	document.getElementById(TRIAL_WORLD_HISTORY).style.background="white";
	document.getElementById(TRIAL_JAPANESE_HISTORY).style.background="white";
	document.getElementById(TRIAL_GEOGRAPHY).style.background="white";
	document.getElementById(TRIAL_MODERN_SOCIETY).style.background="white";
	document.getElementById(TRIAL_ETHICS).style.background="white";
	document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).style.background="white";
	document.getElementById(TRIAL_PHYSICAL_SCIENCE).style.background="white";
	document.getElementById(TRIAL_BIOLOGY).style.background="white";
	document.getElementById(TRIAL_SCIENCE).style.background="white";
	document.getElementById(TRIAL_EARTH_SCIENCE).style.background="white";
	document.getElementById(TRIAL_MODERN_JAPANESE).style.background="white";
}

function trialRecure()
{
	//一次点数のDsiable処理
	//　(3)同時入力の制限
	//　地歴公民
	var icnt;
	icnt=0;
	if (document.getElementById(TRIAL_WORLD_HISTORY).value!="")
	{
		++icnt;
	}
	if (document.getElementById(TRIAL_JAPANESE_HISTORY).value!="")
	{
		++icnt;
	}
	if (document.getElementById(TRIAL_GEOGRAPHY).value!="")
	{
		++icnt;
	}
	if (document.getElementById(TRIAL_MODERN_SOCIETY).value!="")
	{
		++icnt;
	}
	if (document.getElementById(TRIAL_ETHICS).value!="")
	{
		++icnt;
	}
	if (document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).value!="")
	{
		++icnt;
	}
	if (icnt >= 2)
	{
		if (document.getElementById(TRIAL_WORLD_HISTORY).value=="")
		{
			setDisable(TRIAL_WORLD_HISTORY);
		}
		if (document.getElementById(TRIAL_JAPANESE_HISTORY).value=="")
		{
			setDisable(TRIAL_JAPANESE_HISTORY);
		}
		if (document.getElementById(TRIAL_GEOGRAPHY).value=="")
		{
			setDisable(TRIAL_GEOGRAPHY);
		}
		if (document.getElementById(TRIAL_MODERN_SOCIETY).value=="")
		{
			setDisable(TRIAL_MODERN_SOCIETY);
		}
		if (document.getElementById(TRIAL_ETHICS).value=="")
		{
			setDisable(TRIAL_ETHICS);
		}
		if (document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).value=="")
		{
			setDisable(TRIAL_ETHICS_POLITICS_ECONOMICS);
		}
	}
	//　理科
	icnt=0;
	if (document.getElementById(TRIAL_PHYSICAL_SCIENCE).value!="")
	{
		++icnt;
	}
	if (document.getElementById(TRIAL_SCIENCE).value!="")
	{
		++icnt;
	}
	if (document.getElementById(TRIAL_BIOLOGY).value!="")
	{
		++icnt;
	}
	if (document.getElementById(TRIAL_EARTH_SCIENCE).value!="")
	{
		++icnt;
	}
	if (icnt>=2){
		if (document.getElementById(TRIAL_PHYSICAL_SCIENCE).value=="")
		{
			setDisable(TRIAL_PHYSICAL_SCIENCE);
		}
		if (document.getElementById(TRIAL_SCIENCE).value=="")
		{
			setDisable(TRIAL_SCIENCE);
		}
		if (document.getElementById(TRIAL_BIOLOGY).value=="")
		{
			setDisable(TRIAL_BIOLOGY);
		}
		if (document.getElementById(TRIAL_EARTH_SCIENCE).value=="")
		{
			setDisable(TRIAL_EARTH_SCIENCE);
		}
	}
}

//地域選択時判定
function onCheckPretecture(obj)
{
	if (obj.checked == true)
	{
		var count = getPretectureCount();
		if (count > Max_Pretecture)
		{
			obj.checked = false;
			window.alert("地域の指定は、５つまでです。");
			obj.focus();
		}
	}
	setChecked();
}

//系統選択時判定
function onCheckDepartment(obj)
{
	if (obj.checked == true)
	{
		var count = getDepartmentCount();
		if (count > Max_Department)
		{
			obj.checked = false;
			window.alert("系統の指定は、６つまでです。");
			obj.focus();
		}
	}
	setChecked();
}

//大学選択時判定
function checkUniversity(obj)
{
	if (obj.checked == true)
	{
		var count = getUniversityCount();
		if (count > Max_University)
		{
			obj.checked = false;
			window.alert("大学の選択は、最高２０大学までです。");
			obj.focus();
		}
	}
	setUniversity();
}


//国私・日程 
function onCheckDD(obj)
{
	if (obj.checked == true)
	{
		setChecked();
	}
}


var Max_UniversityCollect = 20;      //個別大学指定最大件数
//個別大学指定選択時判定
function checkUniversityCollect(obj)
{
	if (obj.checked == true)
	{
		var count = getUniversityCollectCount();
		if (count > Max_UniversityCollect)
		{
			obj.checked = false;
			window.alert("個別大学の指定は、最高２０までです。");
			obj.focus();
		}
	}
}
//指定された個別大学件数
function getUniversityCollectCount(){
	var count = 0;
	$('[name="universityCollectUnitCode"]:checked').each(function(){
		count += 1;
	});
	return count;
 }

//次へボタン押下時のチェック
function checkNext(){
	if(getUniversityCollectCount() == 0){
		window.alert("大学が一つも選択されていません。");
		return false;
	}
	return true;
}

function setChecked(){
		var na = "";
		var pu = "";
		var pp = "";
		var ct=0;
		var x=[];
		$('[name="checkDD"]:checked').each(function(){
			x.push($('label[for="' + $(this).attr("id") + '"]').text());
		});
		var i;
		for(i = 0;i < x.length;i++)
		{
			 na = na + x[i] + " 、 ";
			 ct += 1;
		}
		$("p.vv").text(na);

		var x1=[];
		$('[name="checkPretecture"]:checked').each(function(){
			x1.push($('label[for="' + $(this).attr("id") + '"]').text());
		});
		var i1;
		for(i1 = 0;i1 < x1.length;i1++)
		{
			pu = pu + x1[i1] + " 、 ";
			ct += 1;
		}
		$("p.pv").text(pu);

		var x2=[];
		$('[name="checkDepartment"]:checked').each(function(){
			x2.push($('label[for="' + $(this).attr("id") + '"]').text());
		});
		var i2;
		for(i2 = 0;i2 < x2.length;i2++)
		{
			pp = pp + x2[i2] + " 、 ";
			ct += 1;
		}
		$("p.pp").text(pp);
}

$(document).ready(function(){
	var cc= "0";
	$("span.cc").text(cc);
});

function setUniversity(){
		var na = "";
		var pu = "";
		var pp = "";
		var jc = "";
		var ct=0;
		var x=[];
		$('[name="checkNationalUniversity"]:checked').each(function(){
			x.push($('label[for="' + $(this).attr("id") + '"]').text());
		});
		var i;
		for(i = 0;i < x.length;i++)
		{
			 na = na + x[i] + " 、 ";
			 ct += 1;
		}
		$("p.vv").text(na);

		var x1=[];
		$('[name="checkPublicUniversity"]:checked').each(function(){
			x1.push($('label[for="' + $(this).attr("id") + '"]').text());
		});
		var i1;
		for(i1 = 0;i1 < x1.length;i1++)
		{
			pu = pu + x1[i1] + " 、 ";
			ct += 1;
		}
		$("p.pv").text(pu);

		var x2=[];
		$('[name="checkPrivateUniversity"]:checked').each(function(){
			x2.push($('label[for="' + $(this).attr("id") + '"]').text());
		});
		var i2;
		for(i2 = 0;i2 < x2.length;i2++)
		{
			pp = pp + x2[i2] + " 、 ";
			ct += 1;
		}
		$("p.pp").text(pp);

		var x3=[];
		$('[name="checkJuniorCollege"]:checked').each(function(){
			x3.push($('label[for="' + $(this).attr("id") + '"]').text());
		});
		var i3;
		for(i3 = 0;i3 < x3.length;i3++)
		{
			jc = jc + x3[i3] + " 、 ";
			ct += 1;
		}
		$("p.jc").text(jc);

		var cc =  ct;
		$("span.cc").text(cc);
}


function OnchangeValue(obj){

	var OV_id = obj.id;
	var input_value = "";
	input_value = document.getElementById(OV_id).value;
	if ( input_value != "" ){
		$("#tokuten .rialtime_box dd." + OV_id + " p").text(input_value);
		$("." + OV_id).css("display","block");
		$("#tokuten .rialtime_box dd." + OV_id).css("display","flex");
	} else{
		input_value="";
		$("#tokuten .rialtime_box dd." + OV_id + " p").text(input_value);
		$("." + OV_id).css("display","none");
		$("#tokuten .rialtime_box dd." + OV_id).css("display","none");
	}
}



//------------------------------------------------------------------------------
// サブミット時チェック
//------------------------------------------------------------------------------
function checkBeforeSubmit()
{
	//(1)
	//(1-1)
	if(checkCenterNone() == true)
	{
		window.alert("共通テストの得点が入力されていません。");
		document.getElementById(ENGLISH_WRITE).focus();
		return false;
	}
	//(1-2)
	//ドッキング判定が選択されている場合
	if (document.getElementById("selectDocking")[document.getElementById("selectDocking").selectedIndex].value != "000")
	{
		if(checkMockExaminationNone())
		{
			window.alert("2次型模試の得点が入力されていません。");
			document.getElementById(TRIAL_JAPANESE).focus();
			return false;
		}
	}
	//(1-3)
	//(1-4)
	//条件判定
	if (document.getElementsByName("radioCondition")[0].checked == true)
	{
		if (getPretectureCount() == 0)
		{
 			window.alert("地域の条件が指定されてません。");
 			//全国にフォーカス
 			document.getElementById("checkPretecture0").focus();
 			return false;
 		}
 		else if (getDepartmentCount() == 0)
 		{
 			window.alert("系統の条件が指定されてません。");
 			//人文科学部(全体)にフォーカス
 			document.getElementById("checkDepartment1").focus();
 			return false;
 		}
 		else if (getDDCount() == 0)
 		{
 			window.alert("国私・日程の条件が指定されてません。");
 			//国立大：前期日程にフォーカス
 			document.getElementById("checkDD1").focus();
 			return false;
		}
	}
	//個別指定
	else
	{
		//チェック済み大学件数を取得し判定する
		var count = getUniversityCount();
 		if (count == 0)
 		{
 			window.alert("大学が指定されていません。");
 			//旭川医大にフォーカス
 			document.getElementById("1005").focus();
 			return false;
 		}
 	}

	var icnt;			//入力科目カウンタ
	var iSelectMach;		//第１解答科目選択一致フラグ　0=不一致　1=一致
	var iSelectedIndex;	//第１解答科目選択変換値
	//第１解答科目入力チェック(地歴・公民)
	icnt=0;
	iSelectMach=0;
	iSelectedIndex=0;
	//日本史B
	if (document.getElementById(JAPANESE_HISTORY_B).value != "")
	{
		++icnt;
		iSelectedIndex = 1;
		if	(document.getElementById("selectGC").value == "51B")
		{
				iSelectMach = 1;
		}
	}
	//世界史B
	if (document.getElementById(WORLD_HISTORY_B).value != "")
	{
		++icnt;
		iSelectedIndex = 2;
		if	(document.getElementById("selectGC").value == "52B")
		{
				iSelectMach = 1;
		}
	}
	//地理B
	if (document.getElementById(GEOGRAPHY_B).value != "")
	{
		++icnt;
		iSelectedIndex = 3;
		if	(document.getElementById("selectGC").value == "53B")
		{
				iSelectMach = 1;
		}
	}
	//日本史A
	if (document.getElementById(JAPANESE_HISTORY_A).value != "")
	{
		++icnt;
		iSelectedIndex = 4;
		if	(document.getElementById("selectGC").value == "51A")
		{
				iSelectMach = 1;
		}
	}
	//世界史A
	if (document.getElementById(WORLD_HISTORY_A).value != "")
	{
		++icnt;
		iSelectedIndex = 5;
		if	(document.getElementById("selectGC").value == "52A")
		{
				iSelectMach = 1;
		}
	}
	//地理A
	if (document.getElementById(GEOGRAPHY_A).value != "")
	{
		++icnt;
		iSelectedIndex = 6;
		if	(document.getElementById("selectGC").value == "53A")
		{
				iSelectMach = 1;
		}
	}
	//現代社会
	if (document.getElementById(MODERN_SOCIETY).value != "")
	{
		++icnt;
		iSelectedIndex = 7;
		if	(document.getElementById("selectGC").value == "54")
		{
				iSelectMach = 1;
		}
	}
	//倫理
	if (document.getElementById(ETHICS).value != "")
	{
		++icnt;
		iSelectedIndex = 8;
		if	(document.getElementById("selectGC").value == "55")
		{
				iSelectMach = 1;
		}
	}
	//政治経済
	if (document.getElementById(POLITICS_ECONOMICS).value != "")
	{
		++icnt;
		iSelectedIndex = 9;
		if	(document.getElementById("selectGC").value == "56")
		{
				iSelectMach = 1;
		}
	}
	//倫理・政治経済
	if (document.getElementById(ETHICS_POLITICS_ECONOMICS).value != "")
	{
		++icnt;
		iSelectedIndex = 10;
		if	(document.getElementById("selectGC").value == "57")
		{
				iSelectMach = 1;
		}
	}

	//プルダウン未選択
	if(document.getElementById("selectGC").value == "000")
	{
		if(icnt == 2)
		{
			window.alert("第１解答科目（歴史・公民）のプルダウンが選択されていません。");
			return false;
		}
		if(icnt == 1)
		{
			//1科目入力でプルダウン未選択の場合は、第１解答科目を自動設定する
			document.getElementById("selectGC").selectedIndex = iSelectedIndex;
		}
	}
	//プルダウン選択
	else
	{
		if(icnt == 0)
		{
			window.alert("第１解答科目（歴史・公民）の得点が未入力です。");
			return false;
		}
		else
		{
			if(iSelectMach == 0)
			{
				window.alert("第１解答科目（歴史・公民）と入力した得点の科目の組み合わせが間違っています。");
				return false;
			}
		}
	}

	//新課程・理科
	icnt=0;
	iSelectMach=0;
	iSelectedIndex=0;
	//新課程・物理
	if (document.getElementById(PHYSICAL_SCIENCE).value != "")
	{
		++icnt;
		iSelectedIndex = 1;
		if	(document.getElementById("selectNewS").value == "41")
		{
				iSelectMach = 1;
		}
	}
	//新課程・化学
	if (document.getElementById(SCIENCE).value != "")
	{
		++icnt;
		iSelectedIndex = 2;
		if	(document.getElementById("selectNewS").value == "42")
		{
				iSelectMach = 1;
		}
	}
	//新課程・生物
	if (document.getElementById(BIOLOGY).value !="")
	{
		++icnt;
		iSelectedIndex = 3;
		if	(document.getElementById("selectNewS").value == "43")
		{
				iSelectMach = 1;
		}
	}
	//新課程・地学
	if (document.getElementById(EARTH_SCIENCE).value != "")
	{
		++icnt;
		iSelectedIndex = 4;
		if	(document.getElementById("selectNewS").value == "44")
		{
				iSelectMach = 1;
		}
	}

	//プルダウン未選択
	if(document.getElementById("selectNewS").value == "000")
	{
		if(icnt == 2)
		{
			window.alert("第１解答科目（理科　新課程）のプルダウンが選択されていません。");
			return false;
		}
		if(icnt == 1)
		{
			//1科目入力でプルダウン未選択の場合は、第１解答科目を自動設定する
			document.getElementById("selectNewS").selectedIndex = iSelectedIndex;
		}
	}
	//プルダウン選択
	else
	{
		if(icnt == 0)
		{
			window.alert("第１解答科目（理科　新課程）の得点が未入力です。");
			return false;
		}
		else
		{
			if(iSelectMach == 0)
			{
				window.alert("第１解答科目（理科　新課程）と入力した得点の科目の組み合わせが間違っています。");
				return false;
			}
		}
	}

	//旧課程・理科
	icnt=0;
	iSelectMach=0;
	iSelectedIndex=0;
	//旧課程・物理I
	if (document.getElementById(PHYSICAL_SCIENCE_ONE).value != "")
	{
		++icnt;
		iSelectedIndex = 1;
		if	(document.getElementById("selectOldS").value == "41K")
		{
				iSelectMach = 1;
		}
	}
	//旧課程・化学I
	if (document.getElementById(SCIENCE_ONE).value != "")
	{
		++icnt;
		iSelectedIndex = 2;
		if	(document.getElementById("selectOldS").value == "42K")
		{
				iSelectMach = 1;
		}
	}
	//旧課程・生物I
	if (document.getElementById(BIOLOGY_ONE).value != "")
	{
		++icnt;
		iSelectedIndex = 3;
		if	(document.getElementById("selectOldS").value == "43K")
		{
				iSelectMach = 1;
		}
	}
	//旧課程・地学I
	if (document.getElementById(EARTH_SCIENCE_ONE).value != "")
	{
		++icnt;
		iSelectedIndex = 4;
		if	(document.getElementById("selectOldS").value == "44K")
		{
				iSelectMach = 1;
		}
	}
	//旧課程・理科総合A
	if (document.getElementById(TOTAL_SCIENCE_A).value != "")
	{
		++icnt;
		iSelectedIndex = 5;
		if	(document.getElementById("selectOldS").value == "45K")
		{
				iSelectMach = 1;
		}
	}
	//旧課程・理科総合B
	if (document.getElementById(TOTAL_SCIENCE_B).value != "")
	{
		++icnt;
		iSelectedIndex = 6;
		if	(document.getElementById("selectOldS").value == "46K")
		{
				iSelectMach = 1;
		}
	}

	//プルダウン未選択
	if(document.getElementById("selectOldS").value == "000")
	{
		if(icnt == 2)
		{
			window.alert("第１解答科目（理科　旧課程）のプルダウンが選択されていません。");
			return false;
		}
		if(icnt == 1)
		{
			//1科目入力でプルダウン未選択の場合は、第１解答科目を自動設定する
			document.getElementById("selectOldS").selectedIndex = iSelectedIndex;
		}
	}
	//プルダウン選択
	else
	{
		if(icnt == 0)
		{
			window.alert("第１解答科目（理科　旧課程）の得点が未入力です。");
			return false;
		}
		else
		{
			if(iSelectMach == 0)
			{
				window.alert("第１解答科目（理科　旧課程）と入力した得点の科目の組み合わせが間違っています。");
				return false;
			}
		}
	}

	return true;
}

//------------------------------------------------------------------------------
// 共通テスト入力判定
//------------------------------------------------------------------------------
function checkCenterNone()
{
	var vals;
	//英語リーディング
	vals = document.getElementById(ENGLISH_WRITE).value;
	//英語リスニング
	vals = vals + document.getElementById(ENGLISH_LISTENING).value;
	//国語
	vals = vals + document.getElementById(JAPANESE).value;
	//新課程・数学I
	vals = vals + document.getElementById(NEW_MATH_ONE).value;
	//新課程・数学IA
	vals = vals + document.getElementById(NEW_MATH_ONE_A).value;
	//新課程・数学II
	vals = vals + document.getElementById(NEW_MATH_TOW).value;
	//新課程・数学IIB
	vals = vals + document.getElementById(NEW_MATH_TOW_B).value;
	//旧課程・数学I
	vals = vals + document.getElementById(OLD_MATH_ONE).value;
	//旧課程・数学IA
	vals = vals + document.getElementById(OLD_MATH_ONE_A).value;
	//旧課程・数学IIB
	vals = vals + document.getElementById(OLD_MATH_TOW_B).value;
	//日本史B
	vals = vals + document.getElementById(JAPANESE_HISTORY_B).value;
	//世界史B
	vals = vals + document.getElementById(WORLD_HISTORY_B).value;
	//地理B
	vals = vals + document.getElementById(GEOGRAPHY_B).value;
	//日本史A
	vals = vals + document.getElementById(JAPANESE_HISTORY_A).value;
	//世界史A
	vals = vals + document.getElementById(WORLD_HISTORY_A).value;
	//地理A
	vals = vals + document.getElementById(GEOGRAPHY_A).value;
	//現代社会
	vals = vals + document.getElementById(MODERN_SOCIETY).value;
	//倫理
	vals = vals + document.getElementById(ETHICS).value;
	//政治経済
	vals = vals + document.getElementById(POLITICS_ECONOMICS).value;
	//倫理、政治・経済
	vals = vals + document.getElementById(ETHICS_POLITICS_ECONOMICS).value;
	//新課程・物理基礎
	vals = vals + document.getElementById(BASIC_PHYSICAL_SCIENCE).value;
	//新課程・化学基礎
	vals = vals + document.getElementById(BASIC_SCIENCE).value;
	//新課程・生物基礎
	vals = vals + document.getElementById(BASIC_BIOLOGY).value;
	//新課程・地学基礎
	vals = vals + document.getElementById(BASIC_EARTH_SCIENCE).value;
	//新課程・物理
	vals = vals + document.getElementById(PHYSICAL_SCIENCE).value;
	//新課程・化学
	vals = vals + document.getElementById(SCIENCE).value;
	//新課程・生物
	vals = vals + document.getElementById(BIOLOGY).value;
	//新課程・地学
	vals = vals + document.getElementById(EARTH_SCIENCE).value;
	//旧課程・物理I
	vals = vals + document.getElementById(PHYSICAL_SCIENCE_ONE).value;
	//旧課程・化学I
	vals = vals + document.getElementById(SCIENCE_ONE).value;
	//旧課程・生物I
	vals = vals + document.getElementById(BIOLOGY_ONE).value;
	//旧課程・地学I
	vals = vals + document.getElementById(EARTH_SCIENCE_ONE).value;
	//旧課程・理科総合A
	vals = vals + document.getElementById(TOTAL_SCIENCE_A).value;
	//旧課程・理科総合B
	vals = vals + document.getElementById(TOTAL_SCIENCE_B).value;

	if(vals == "")
	{
		return true;
	}
	else
	{
		return false;
	}
}

//------------------------------------------------------------------------------
//二次型模試入力判定
//------------------------------------------------------------------------------
function checkMockExaminationNone()
{
	var vals;

	//国語
	vals = document.getElementById(TRIAL_JAPANESE).value;
	//現代文
	vals = vals + document.getElementById(TRIAL_MODERN_JAPANESE).value;
	//数学
	vals = vals + document.getElementById(TRIAL_MATH).value;
	//英語
	vals = vals + document.getElementById(TRIAL_ENGLISH).value;
	//物理
	vals = vals + document.getElementById(TRIAL_PHYSICAL_SCIENCE).value;
	//生物
	vals = vals + document.getElementById(TRIAL_BIOLOGY).value;
	//化学
	vals = vals + document.getElementById(TRIAL_SCIENCE).value;
	//地学
	vals = vals + document.getElementById(TRIAL_EARTH_SCIENCE).value;
	//世界史
	vals = vals + document.getElementById(TRIAL_WORLD_HISTORY).value;
	//日本史
	vals = vals + document.getElementById(TRIAL_JAPANESE_HISTORY).value;
	//地理
	vals = vals + document.getElementById(TRIAL_GEOGRAPHY).value;
	//現代社会
	vals = vals + document.getElementById(TRIAL_MODERN_SOCIETY).value;
	//倫理
	vals = vals + document.getElementById(TRIAL_ETHICS).value;
	//政経・倫理
	vals = vals + document.getElementById(TRIAL_ETHICS_POLITICS_ECONOMICS).value;

	if(vals == "")
	{
		return true;
	}
	else
	{
		return false;
	}
}

//選択された大学件数
function getUniversityCount(){
	var nat_count = 0;
	var pub_count = 0;
	var pri_count = 0;
	var jc_count = 0;
	//国立大学
	$('[name="checkNationalUniversity"]:checked').each(function(){
		nat_count += 1;
	});
	//公立大学
	$('[name="checkPublicUniversity"]:checked').each(function(){
		pub_count += 1;
	});
	//私立大学
	$('[name="checkPrivateUniversity"]:checked').each(function(){
		pri_count += 1;
	});
	//短大
	$('[name="checkJuniorCollege"]:checked').each(function(){
		jc_count += 1;
	});
	return nat_count + pub_count + pri_count + jc_count;
 }

//選択された地域件数
function getPretectureCount(){
	var count= 0;
	$('[name="checkPretecture"]:checked').each(function(){
		count += 1;
	});
	return count;
 }

//選択された系統件数
function getDepartmentCount(){
	var count= 0;
	$('[name="checkDepartment"]:checked').each(function(){
		count += 1;
	});
	return count;
 }

//選択された国私・日程件数
function getDDCount(){
	var count= 0;
	$('[name="checkDD"]:checked').each(function(){
		count += 1;
	});
	return count;
 }

//共通テスト数学I件数
function getMathOneCount()
{
	var count = 0;
	if (document.getElementById(NEW_MATH_ONE).value != "")
	{
		count++;
	}
	if (document.getElementById(NEW_MATH_ONE_A).value != "")
	{
		count++;
	}
	if (document.getElementById(OLD_MATH_ONE).value != "")
	{
		count++;
	}
	if (document.getElementById(OLD_MATH_ONE_A).value != "")
	{
		count++;
	}
	return count;
}

//共通テスト数学II件数
function getMathTwoCount()
{
	var count = 0;
	if (document.getElementById(NEW_MATH_TOW).value != "")
	{
		count++;
	}
	if (document.getElementById(NEW_MATH_TOW_B).value != "")
	{
		count++;
	}
	if (document.getElementById(OLD_MATH_TOW_B).value != "")
	{
		count++;
	}
	return count;
}

//フォームロード時
function loadWindow()
{
	entryChange1();

	//共通テスト
	//数学
	if (getMathOneCount() >= 1)
	{
		if (document.getElementById(NEW_MATH_ONE).value == "")
		{
			setDisable(NEW_MATH_ONE);
		}
		if (document.getElementById(NEW_MATH_ONE_A).value == "")
		{
			setDisable(NEW_MATH_ONE_A);
		}
		if (document.getElementById(OLD_MATH_ONE).value == "")
		{
			setDisable(OLD_MATH_ONE);
		}
		if (document.getElementById(OLD_MATH_ONE_A).value == "")
		{
			setDisable(OLD_MATH_ONE_A);
		}
	}
	if (getMathTwoCount() >= 1)
	{
		if (document.getElementById(NEW_MATH_TOW).value == "")
		{
			setDisable(NEW_MATH_TOW);
		}
		if (document.getElementById(NEW_MATH_TOW_B).value == "")
		{
			setDisable(NEW_MATH_TOW_B);
		}
		if (document.getElementById(OLD_MATH_TOW_B).value == "")
		{
			setDisable(OLD_MATH_TOW_B);
		}
	}
	//地歴公民
	valueOnchange(document.getElementById(JAPANESE_HISTORY_B),100);
	valueOnchange(document.getElementById(WORLD_HISTORY_B),100);
	valueOnchange(document.getElementById(GEOGRAPHY_B),100);
	valueOnchange(document.getElementById(JAPANESE_HISTORY_A),100);
	valueOnchange(document.getElementById(WORLD_HISTORY_A),100);
	valueOnchange(document.getElementById(GEOGRAPHY_A),100);
	valueOnchange(document.getElementById(MODERN_SOCIETY),100);
	valueOnchange(document.getElementById(ETHICS),100);
	valueOnchange(document.getElementById(POLITICS_ECONOMICS),100);
	valueOnchange(document.getElementById(ETHICS_POLITICS_ECONOMICS),100);
	//新課程・理科
	if (document.getElementById(BASIC_PHYSICAL_SCIENCE).value != ""
	||  document.getElementById(BASIC_SCIENCE).value != ""
	||  document.getElementById(BASIC_BIOLOGY).value != ""
	||  document.getElementById(BASIC_EARTH_SCIENCE).value != ""
	||  document.getElementById(PHYSICAL_SCIENCE).value != ""
	||  document.getElementById(SCIENCE).value != ""
	||  document.getElementById(BIOLOGY).value != ""
	||  document.getElementById(EARTH_SCIENCE).value != "")
	{
		if (getNewBasicScienceCount() >= 2)
		{
			if (document.getElementById(BASIC_PHYSICAL_SCIENCE).value == "")
			{
				setDisable(BASIC_PHYSICAL_SCIENCE);
			}
			if (document.getElementById(BASIC_SCIENCE).value == "")
			{
				setDisable(BASIC_SCIENCE);
			}
			if (document.getElementById(BASIC_BIOLOGY).value == "")
			{
				setDisable(BASIC_BIOLOGY);
			}
			if (document.getElementById(BASIC_EARTH_SCIENCE).value == "")
			{
				setDisable(BASIC_EARTH_SCIENCE);
			}
		}
		if ((getNewSpecialScienceCount() >= 2)
		||  (getNewSpecialScienceCount() >= 1 && getNewBasicScienceCount() >= 1))
		{
			if (getNewSpecialScienceCount() >= 2)
			{
				setDisable(BASIC_PHYSICAL_SCIENCE);
				setDisable(BASIC_SCIENCE);
				setDisable(BASIC_BIOLOGY);
				setDisable(BASIC_EARTH_SCIENCE);
			}
			if (document.getElementById(PHYSICAL_SCIENCE).value == "")
			{
				setDisable(PHYSICAL_SCIENCE);
			}
			if (document.getElementById(SCIENCE).value == "")
			{
				setDisable(SCIENCE);
			}
			if (document.getElementById(BIOLOGY).value == "")
			{
				setDisable(BIOLOGY);
			}
			if (document.getElementById(EARTH_SCIENCE).value == "")
			{
				setDisable(EARTH_SCIENCE);
			}
		}
		document.getElementById("selectNewS").disabled = false;
		document.getElementById("selectNewS").style.background = "white";
		setAllOldScienceDisable();
		document.getElementById("selectOldS").disabled = true;
		document.getElementById("selectOldS").style.background = "silver";
	}
	else
	{
		//getOldScienceCount();
		//旧課程・理科
		if (document.getElementById(PHYSICAL_SCIENCE_ONE).value != ""
		||  document.getElementById(SCIENCE_ONE).value != ""
		||  document.getElementById(BIOLOGY_ONE).value != ""
		||  document.getElementById(EARTH_SCIENCE_ONE).value != ""
		||  document.getElementById(TOTAL_SCIENCE_A).value != ""
		||  document.getElementById(TOTAL_SCIENCE_B).value != "")
		{
			if (getOldScienceCount() >= 2)
			{
				if (document.getElementById(PHYSICAL_SCIENCE_ONE).value == "")
				{
					setDisable(PHYSICAL_SCIENCE_ONE);
				}
				if (document.getElementById(SCIENCE_ONE).value == "")
				{
					setDisable(SCIENCE_ONE);
				}
				if (document.getElementById(BIOLOGY_ONE).value == "")
				{
					setDisable(BIOLOGY_ONE);
				}
				if (document.getElementById(EARTH_SCIENCE_ONE).value == "")
				{
					setDisable(EARTH_SCIENCE_ONE);
				}
				if (document.getElementById(TOTAL_SCIENCE_A).value == "")
				{
					setDisable(TOTAL_SCIENCE_A);
				}
				if (document.getElementById(TOTAL_SCIENCE_B).value == "")
				{
					setDisable(TOTAL_SCIENCE_B);
				}
			}
			document.getElementById("selectNewS").disabled = true;
			document.getElementById("selectNewS").style.background = "silver";
			setNewdScienceDisable();
			setNewdSpecialScienceDisable();
			document.getElementById("selectOldS").disabled = false;
			document.getElementById("selectOldS").style.background = "white";
		}
	}
	//ドッキング判定
	selectDockingOnchange("");

	//選択済の大学名を設定
	setUniversity();
}


//新課程理科・第1解答科目
function selectNewSOnchange()
{
	if (document.getElementById("selectNewS").value == "000")
	{
		 if (getNewBasicScienceCount() == 0 && getNewSpecialScienceCount() == 0)
		 {
			setAllOldScienceEnable();
			document.getElementById("selectOldS").disabled = false;
			document.getElementById("selectOldS").style.background = "white";
		 }
	}
	else
	{
		setAllOldScienceDisable();
		document.getElementById("selectOldS").disabled = true;
		document.getElementById("selectOldS").style.background = "silver";
	}
}

//旧課程理科・第1解答科目
function selectOldSOnchange()
{
	if (document.getElementById("selectOldS").value == "000")
	{
		 if (getOldScienceCount() == 0)
		 {
			setAllNewdBasicScienceEnable();
			setAllNewdSpecialScienceEnable();
			document.getElementById("selectNewS").disabled = false;
			document.getElementById("selectNewS").style.background = "white";
		 }
	}
	else
	{
		setAllNewdBasicScienceDisable();
		setAllNewdSpecialScienceDisable();
		document.getElementById("selectNewS").disabled = true;
		document.getElementById("selectNewS").style.background = "silver";
	}
}

function setDisable(txtobj)
{
	document.getElementById(txtobj).value = "";
	document.getElementById(txtobj).disabled = true;
	document.getElementById(txtobj).style.background = "silver";
}

function setEnable(txtobj)
{
	document.getElementById(txtobj).disabled = false;
	document.getElementById(txtobj).style.background = "white";
}

function toLowString(val)
{
	return val.toLowerCase();
}

//
function toLowNumeric(val)
{
    val += '';
    var table = { "０":0, "１":1, "２":2, "３":3, "４":4, "５":5, "６":6, "７":7, "８":8, "９":9  };
    while(val.match(/[０-９]/))
    {
        for(n in table)
        {
            val = val.replace(n, table[n]);
        }
    }
    return val;
}

//得点呼び出しJavaScript
//校内番号の値の妥当性チェック
function CheckSundaiNo(val, emptyCheck)
{
	var objRegExpNumeric = new RegExp("[^0-9]{1,}");

	if(val == ""){
		if(emptyCheck){
			return false;
		}else{
			return true;
		}
	}
	else{
		if(val.match(objRegExpNumeric) == null){
			return true;
		}
		else{
			return false;
		}
	}
}

//校内番号の値が変更された差異のチェック
function valueSundaiNoOnchange(obj)
{
	var val;
	var chkMsg = "校内番号には、数字を入れてください。";

	val=obj.value;

	if(!CheckSundaiNo(val, false)){
		window.alert(chkMsg);
		obj.value = "";
	}
}

//得点呼び出し
$(function () {
	$("#callScoreExecButton").click(function(){

		var chkMsg = "校内番号には、数字を入れてください。";
		var confMsg = "得点呼び出しを行います。よろしいですか？";
		var warnMsg = "データネットの成績が存在しません。";
		var errMsg = "得点呼び出しができませんでした。\n" +
					"現在アクセスが集中しているため、申し訳ございませんが、しばらく経ってからアクセスいただくようお願いいたします。";

		var user = $("#userId").val();
		var no = $("#sundaiNo").val();
		var exam = $("#selectMockExamination").val();

		if(!CheckSundaiNo(no, true)){
			window.alert(chkMsg);
			return;
		}

		if(!confirm(confMsg)){
			return;
		}

		//呼び出し実行校内番号をクリア
		$("#calledSundaiNo").val("");

		$.ajax({
			async:false,
			type: "POST",
			url: "CallScore.do",
			data: {
				userId: user,
				sundaiNo: no,
				selectMockExamination: exam
			},
			cache: false,
			datatype: 'json',
			success: function(json){

				if($.isPlainObject(json)){

					//全ての入力項目値を初期化する
					clearEntry();

					if(json.found){
						//呼び出し実行校内番号
						$("#calledSundaiNo").val(no);

						//共通テスト得点の設定
						//英語
						$("#englishWrite").val(json.englishWrite);
						$("#englishListening").val(json.englishListening);
						//数学 旧課程
						$("#oldMathOne").val(json.oldMathOne);
						$("#oldMathOneA").val(json.oldMathOneA);
						$("#oldMathTowB").val(json.oldMathTowB);
						//数学 新課程
						$("#newMathOne").val(json.newMathOne);
						$("#newMathOneA").val(json.newMathOneA);
						$("#newMathTow").val(json.newMathTow);
						$("#newMathTowB").val(json.newMathTowB);
						//国語
						$("#japanese").val(json.japanese);
						$("#modernJapanese").val(json.modernJapanese);
						$("#ancientWritings").val(json.ancientWritings);
						$("#chineseWritings").val(json.chineseWritings);
						//理科 旧課程
						$("#selectOldS").val([json.selectOldS]);
						$("#physicalScienceOne").val(json.physicalScienceOne);
						$("#scienceOne").val(json.scienceOne);
						$("#biologyOne").val(json.biologyOne);
						$("#earthScienceOne").val(json.earthScienceOne);
						$("#totalScienceA").val(json.totalScienceA);
						$("#totalScienceB").val(json.totalScienceB);
						//理科 新課程
						$("#selectNewS").val([json.selectNewS]);
						$("#basicPhysicalScience").val(json.basicPhysicalScience);
						$("#basicScience").val(json.basicScience);
						$("#basicBiology").val(json.basicBiology);
						$("#basicEarthScience").val(json.basicEarthScience);
						$("#physicalScience").val(json.physicalScience);
						$("#science").val(json.science);
						$("#biology").val(json.biology);
						$("#earthScience").val(json.earthScience);
						//地歴公民
						$("#selectGC").val([json.selectGC]);
						$("#japaneseHistoryA").val(json.japaneseHistoryA);
						$("#japaneseHistoryB").val(json.japaneseHistoryB);
						$("#worldHistoryA").val(json.worldHistoryA);
						$("#worldHistoryB").val(json.worldHistoryB);
						$("#geographyA").val(json.geographyA);
						$("#geographyB").val(json.geographyB);
						$("#modernSociety").val(json.modernSociety);
						$("#ethics").val(json.ethics);
						$("#politiceEconomics").val(json.politiceEconomics);
						$("#ethicsPoliticsEconomics").val(json.ethicsPoliticsEconomics);

						//二次模試得点の設定
						$('#selectDocking').val([json.selectDocking]);
						$(':radio[name="radioArtsSciences"]').val([json.radioArtsSciences]);
						$("#trialEnglish").val(json.trialEnglish);
						$("#trialMath").val(json.trialMath);
						$("#trialJapanese").val(json.trialJapanese);
						$("#trialPhysicalScience").val(json.trialPhysicalScience);
						$("#trialScience").val(json.trialScience);
						$("#trialBiology").val(json.trialBiology);
						$("#trialEarthScience").val(json.trialEarthScience);
						$("#trialJapaneseHistory").val(json.trialJapaneseHistory);
						$("#trialWorldHistory").val(json.trialWorldHistory);
						$("#trialGeography").val(json.trialGeography);
						$("#trialEthicsPoliticsEconomics").val(json.trialEthicsPoliticsEconomics);
						$("#trialEthics").val(json.trialEthics);
						$("#trialModernSociety").val(json.trialModernSociety);
						$("#trialModernJapanese").val(json.trialModernJapanese);

					}else{
						alert(warnMsg);
					}
					//入力チェックを行う
					loadWindow();
				}else{
					alert(errMsg);
				}
			},
			error: function(){
				alert(errMsg);
			}
		});
	});
});


//得点入力項目を全てEnabledにする
function setEnableAllScore(){

	//共通テスト
	//英語
	setEnable(ENGLISH_WRITE);
	setEnable(ENGLISH_LISTENING);
	//数学 旧課程
	setEnable(OLD_MATH_ONE);
	setEnable(OLD_MATH_ONE_A);
	setEnable(OLD_MATH_TOW_B);
	//数学 新課程
	setEnable(NEW_MATH_ONE);
	setEnable(NEW_MATH_ONE_A);
	setEnable(NEW_MATH_TOW);
	setEnable(NEW_MATH_TOW_B);
	//国語
	setEnable(JAPANESE);
	setEnable(MODERN_JAPANESE);
	setEnable(ANCIENT_WRITINGS);
	setEnable(CHINESE_WRITINGS);
	//理科 旧課程
	setEnable("selectOldS");
	setEnable(PHYSICAL_SCIENCE_ONE);
	setEnable(SCIENCE_ONE);
	setEnable(BIOLOGY_ONE);
	setEnable(EARTH_SCIENCE_ONE);
	setEnable(TOTAL_SCIENCE_A);
	setEnable(TOTAL_SCIENCE_B);
	//理科 新課程
	setEnable("selectNewS");
	setEnable(BASIC_PHYSICAL_SCIENCE);
	setEnable(BASIC_SCIENCE);
	setEnable(BASIC_BIOLOGY);
	setEnable(BASIC_EARTH_SCIENCE);
	setEnable(PHYSICAL_SCIENCE);
	setEnable(SCIENCE);
	setEnable(BIOLOGY);
	setEnable(EARTH_SCIENCE);
	//地歴公民
	setEnable("selectGC");
	setEnable(JAPANESE_HISTORY_A);
	setEnable(JAPANESE_HISTORY_B);
	setEnable(WORLD_HISTORY_A);
	setEnable(WORLD_HISTORY_B);
	setEnable(GEOGRAPHY_A);
	setEnable(GEOGRAPHY_B);
	setEnable(MODERN_SOCIETY);
	setEnable(ETHICS);
	setEnable(POLITICS_ECONOMICS);
	setEnable(ETHICS_POLITICS_ECONOMICS);

	//二次模試
	setEnable("selectDocking");
	setEnable(TRIAL_ENGLISH);
	setEnable(TRIAL_MATH);
	setEnable(TRIAL_JAPANESE);
	setEnable(TRIAL_PHYSICAL_SCIENCE);
	setEnable(TRIAL_SCIENCE);
	setEnable(TRIAL_BIOLOGY);
	setEnable(TRIAL_EARTH_SCIENCE);
	setEnable(TRIAL_JAPANESE_HISTORY);
	setEnable(TRIAL_WORLD_HISTORY);
	setEnable(TRIAL_GEOGRAPHY);
	setEnable(TRIAL_ETHICS_POLITICS_ECONOMICS);
	setEnable(TRIAL_ETHICS);
	setEnable(TRIAL_MODERN_SOCIETY);
	setEnable(TRIAL_MODERN_JAPANESE);
}
//得点呼び出しJavaScript ここまで


//入力項目を初期化する
function clearEntry(){

	setEnableAllScore();

	//共通テスト得点の設定
	//英語
	$("#englishWrite").val("");
	$("#englishListening").val("");
	//数学 旧課程
	$("#oldMathOne").val("");
	$("#oldMathOneA").val("");
	$("#oldMathTowB").val("");
	//数学 新課程
	$("#newMathOne").val("");
	$("#newMathOneA").val("");
	$("#newMathTow").val("");
	$("#newMathTowB").val("");
	//国語
	$("#japanese").val("");
	$("#modernJapanese").val("");
	$("#ancientWritings").val("");
	$("#chineseWritings").val("");
	//理科 旧課程
	$("#selectOldS").val(["000"]);
	$("#physicalScienceOne").val("");
	$("#scienceOne").val("");
	$("#biologyOne").val("");
	$("#earthScienceOne").val("");
	$("#totalScienceA").val("");
	$("#totalScienceB").val("");
	//理科 新課程
	$("#selectNewS").val(["000"]);
	$("#basicPhysicalScience").val("");
	$("#basicScience").val("");
	$("#basicBiology").val("");
	$("#basicEarthScience").val("");
	$("#physicalScience").val("");
	$("#science").val("");
	$("#biology").val("");
	$("#earthScience").val("");
	//地歴公民
	$("#selectGC").val(["000"]);
	$("#japaneseHistoryA").val("");
	$("#japaneseHistoryB").val("");
	$("#worldHistoryA").val("");
	$("#worldHistoryB").val("");
	$("#geographyA").val("");
	$("#geographyB").val("");
	$("#modernSociety").val("");
	$("#ethics").val("");
	$("#politiceEconomics").val("");
	$("#ethicsPoliticsEconomics").val("");

	//二次模試得点の設定
	$('#selectDocking').val(["000"]);
	$(':radio[name="radioArtsSciences"]').val(["1"]);
	$("#trialEnglish").val("");
	$("#trialMath").val("");
	$("#trialJapanese").val("");
	$("#trialPhysicalScience").val("");
	$("#trialScience").val("");
	$("#trialBiology").val("");
	$("#trialEarthScience").val("");
	$("#trialJapaneseHistory").val("");
	$("#trialWorldHistory").val("");
	$("#trialGeography").val("");
	$("#trialEthicsPoliticsEconomics").val("");
	$("#trialEthics").val("");
	$("#trialModernSociety").val("");
	$("#trialModernJapanese").val("");

	//条件指定・個別指定
	$(':radio[name="radioCondition"]').val(["C"]);

	//地域
	$('[name="checkPretecture"]').attr("checked", false);
	//系統
	$('[name="checkDepartment"]').attr("checked", false);
	//国私・日程件数
	$('[name="checkDD"]').attr("checked", false);

	//配点比率
	$('[name="selectScoreRatio"]').val([""]);
	//配点基準
	$('[name="selectJudgmentCriteria"]').val([""]);
	//女子大を除く
	$('[name="womenCollege"]').attr("checked", false);
	//二部を除く
	$('[name="bipartiteUniversity"]').attr("checked", false);

	//国立大学
	$('[name="checkNationalUniversity"]').attr("checked", false);
	//公立大学
	$('[name="checkPublicUniversity"]').attr("checked", false);
	//私立大学
	$('[name="checkPrivateUniversity"]').attr("checked", false);
}


//「戻る」リンク用JavaScript
/* scrollUp full options */
	$(function () {
		//戻るボタン押下時のイベント
		var headerBackLink = $("#headerBackLink");
		var footerBackLink = $("#footerBackLink");
		var backfunc = function() {
			var backPageForm = $("#backPageForm");
			backPageForm.submit();
		};
		headerBackLink.on("click", backfunc);
		footerBackLink.on("click", backfunc);
	});
//「戻る」リンク用JavaScript ここまで
