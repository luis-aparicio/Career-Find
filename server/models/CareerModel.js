//import mongoose from 'mongoose';
const mongoose = require( "mongoose" );

const CareerSchema = new mongoose.Schema ({
  
    
   OnetTitle: String,
   OnetCode: String,
   OnetDescription:  String ,
      Wages : {
      NationalWagesList : [
         {
            RateType :  String ,
            Pct10 :  String ,
            Pct25 :  String ,
            Median :  String ,
            Pct75 :  String ,
            Pct90 :  String ,
            StFips :  String ,
            Area :  String ,
            AreaName :  String 
         }
      ],
      StateWagesList : [
         {
            RateType :  String ,
            Pct10 :  String ,
            Pct25 :  String ,
            Median :  String ,
            Pct75 :  String ,
            Pct90 :  String ,
            StFips :  String ,
            Area :  String ,
            AreaName :  String 
         }
      ],
      BLSAreaWagesList : [
         {
            RateType :  String ,
            Pct10 :  String ,
            Pct25 :  String ,
            Median :  String ,
            Pct75 :  String ,
            Pct90 :  String ,
            StFips :  String ,
            Area :  String ,
            AreaName :  String 
         }
      ],
      WageYear :  String ,
      SocData :  String ,
      SocWageInfo : {
         SocCode :  String ,
         SocTitle :  String ,
         SocDescription :  String 
      }
   },
      BrightOutlook :  String ,
      Green :  String ,
      COSVideoURL :  String ,
      EducationTraining : {
      EducationType : [
         {
            EducationLevel :  String ,
            Value :  String 
         }
      ],
      EducationCode :  String ,
      EducationTitle :  String ,
      ExperienceCode :  String ,
      ExperienceTitle :  String ,
      TrainingCode :  String ,
      TrainingTitle :  String ,
      OccupationTitle :  String 
   },
      BrightOutlookCategory :  String ,
      Tasks : [
      {
         TaskDescription :  String ,
         TaskId :  String ,
         DataValue :  String 
      }
   ],
      Dwas : [
      {
         DwaTitle :  String ,
         DwaId :  String ,
         DataValue :  String ,
         TaskId :  String 
      }
   ],
      AlternateTitles : [
      String 
   ],
      StFips :  String ,
      Location :  String ,
      Video : [
      {
         VideoCode :  String ,
         VideoTitle :  String ,
         VideoType :  String 
      }
   ],
      InterestDataList : [
      {
         ElementId :  String ,
         ElementName :  String ,
         ElementDescription :  String ,
         DataValue :  String ,
         Importance :  String 
      }
   ],
      SocInfo : {
      SocCode :  String ,
      SocTitle :  String ,
      SocDescription :  String 
   },
      Projections : {
      EstimatedYear :  String ,
      ProjectedYear :  String ,
      OccupationTitle :  String ,
      Projections : [
         {
            StateName :  String ,
            Stfips :  String ,
            EstimatedEmployment :  String ,
            ProjectedEmployment :  String ,
            PerCentChange :  String ,
            ProjectedAnnualJobOpening :  String 
         }
      ]
   },
      OOHs : {
      Title :  String ,
      OOHUrl :  String 
   },
      StateResourcesLinks : {
      StateWebResource : [
         {
            Title :  String ,
            Url :  String ,
            Type :  String ,
            StateName :  String 
         }
      ]
   },
      RelatedOnetTitles : [
      {
         Key :  String ,
         Value :  String 
      }
   ],
      SkillsDataList : [
      {
         ElementId :  String ,
         ElementName :  String ,
         ElementDescription :  String ,
         DataValue :  String ,
         Importance: String,
         ImportanceInt :  Number
      }
   ],
      KnowledgeDataList : [
      {

         ElementId :  String ,
         ElementName :  String ,
         ElementDescription :  String ,
         DataValue :  String ,
         Importance: String,
         ImportanceInt :  Number
      }
   ],
      AbilityDataList : [
      {
         ElementId :  String ,
         ElementName :  String ,
         ElementDescription :  String ,
         DataValue :  String ,
         Importance: String,
         ImportanceInt :  Number
      }
   ],
      TrainingPrograms : String,
        
 
   RecordCount : Number,
   DidYouMean :  String,
   AutoCorrection :  String 
})

module.exports = User = mongoose.model( "Career" , CareerSchema);