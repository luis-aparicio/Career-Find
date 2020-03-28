//import mongoose from 'mongoose';
const mongoose = require(mongoose);

const CareerSchema = new mongoose.Schema{
    OccupationDetail: [
      {
        OnetTitle: string,
        OnetCode: string,
        OnetDescription: string,
        Wages: {
          NationalWagesList: [
            {
              RateType: string,
              Pct10: string,
              Pct25: string,
              Median: string,
              Pct75: string,
              Pct90: string,
              StFips: string,
              Area: string,
              AreaName: string
            }
          ],
          StateWagesList: [
            {
              RateType: string,
              Pct10: string,
              Pct25: string,
              Median: string,
              Pct75: string,
              Pct90: string,
              StFips: string,
              Area: string,
              AreaName: string
            }
          ],
          BLSAreaWagesList: [
            {
              RateType: string,
              Pct10: string,
              Pct25: string,
              Median: string,
              Pct75: string,
              Pct90: string,
              StFips: string,
              Area: string,
              AreaName: string
            }
          ],
          WageYear: string,
          SocData: string,
          SocWageInfo: {
            SocCode: string,
            SocTitle: string,
            SocDescription: string
          }
        },
        BrightOutlook: string,
        Green: string,
        COSVideoURL: string,
        EducationTraining: {
          EducationType: [
            {
              EducationLevel: string,
              Value: string
            }
          ],
          EducationCode: string,
          EducationTitle: string,
          ExperienceCode: string,
          ExperienceTitle: string,
          TrainingCode: string,
          TrainingTitle: string,
          OccupationTitle: string
        },
        BrightOutlookCategory: string,
        Tasks: [
          {
            TaskDescription: string,
            TaskId: string,
            DataValue: string
          }
        ],
        AlternateTitles: [
          string
        ],
        StFips: string,
        Location: string,
        Video: [
          {
            VideoCode: string,
            VideoTitle: string,
            VideoType: string
          }
        ],
        Projections: {
          EstimatedYear: string,
          ProjectedYear: string,
          OccupationTitle: string,
          Projections: [
            {
              StateName: string,
              Stfips: string,
              EstimatedEmployment: string,
              ProjectedEmployment: string,
              PerCentChange: string,
              ProjectedAnnualJobOpening: string
            }
          ]
        },
        StateResourcesLinks: {
          StateWebResource: [
            {
              Title: string,
              Url: string,
              Type: string,
              StateName: string
            }
          ]
        },
        RelatedOnetTitles: [
          {
            Key: string,
            Value: string
          }
        ],
        SkillsDataList: [
          {
            ElementId: string,
            ElementName: string,
            ElementDescription: string,
            DataValue: string,
            Importance: string
          }
        ],
        KnowledgeDataList: [
          {
            ElementId: string,
            ElementName: string,
            ElementDescription: string,
            DataValue: string,
            Importance: string
          }
        ],
        AbilityDataList: [
          {
            ElementId: string,
            ElementName: string,
            ElementDescription: string,
            DataValue: string,
            Importance: string
          }
        ],
        TrainingPrograms: [
          string
        ]
      }
    ],
    RecordCount: number,
    DidYouMean: string,
    AutoCorrection: string
}

module.exports = User = mongoose.model("Career", CareerSchema);