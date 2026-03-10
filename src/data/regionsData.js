// data/regionsData.js

export const regionsData = {
  mch: {
    name: "MCH - Maternal and Child Health",
    myanmarName: "MCH - မိခင်နှင့်ကလေး",
    indicators: [
      {
        id: "mmr",
        title: "Maternal Mortality Ratio",
        value: 0.0,
        unit: "per 100,000 live births",
        target: "< 86",
        status: "good"
      },
      {
        id: "skilled_birth",
        title: "Births Attended by Skilled Personnel",
        value: 100,
        unit: "%",
        target: "> 85%",
        status: "good"
      },
      {
        id: "u5_mortality",
        title: "Under-5 Mortality Rate",
        value: 0.0,
        unit: "per 1,000 live births",
        target: "< 36",
        status: "good"
      },
      {
        id: "neonatal_mortality",
        title: "Neonatal Mortality Rate",
        value: 0.0,
        unit: "per 1,000 live births",
        target: "< 21",
        status: "good"
      },
      {
        id: "infant_mortality",
        title: "Infant Mortality Rate",
        value: 0.0,
        unit: "per 1,000 live births",
        target: "< 32",
        status: "good"
      },
      {
        id: "tb_cnr",
        title: "TB Cases Notification Rate",
        value: 177,
        unit: "per 100,000",
        target: "580",
        status: "good"
      },
      {
        id: "tb_tsr",
        title: "TB Treatment Success Rate",
        value: 96,
        unit: "%",
        target: "88%",
        status: "good"
      },
      {
        id: "malaria_api",
        title: "Annual Malaria Parasite Incidence",
        value: 0.4,
        unit: "per 1,000",
        target: "0",
        status: "warning"
      },
      {
        id: "dengue_cfr",
        title: "Dengue Case Fatality Rate",
        value: 0,
        unit: "%",
        target: "<1%",
        status: "good"
      },
      {
        id: "leprosy",
        title: "New Leprosy Cases",
        value: 0,
        unit: "cases",
        target: "0",
        status: "good"
      },
      {
        id: "rabies",
        title: "Suspected Rabies Cases",
        value: 0,
        unit: "cases",
        target: "0",
        status: "good"
      },
      {
        id: "ncd_coverage",
        title: "NCD Clinic Coverage",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "cpr",
        title: "Contraceptive Prevalence Rate",
        value: 87,
        unit: "%",
        target: ">60%",
        status: "good"
      },
      {
        id: "abr",
        title: "Adolescent Birth Rate",
        value: 5.6,
        unit: "per 1,000",
        target: "<10%",
        status: "good"
      },
      {
        id: "bmi",
        title: "Students with BMI <-2SD",
        value: 0.4,
        unit: "%",
        target: "0%",
        status: "warning"
      },
      {
        id: "deworming",
        title: "School Deworming Coverage",
        value: 50,
        unit: "%",
        target: "100%",
        status: "critical"
      },
      {
        id: "underweight",
        title: "Underweight Children (0-59 months)",
        value: 8.81,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "hpv",
        title: "HPV Vaccination Coverage",
        value: 100,
        unit: "%",
        target: ">90%",
        status: "good"
      },
      {
        id: "mr2",
        title: "MR 2 Vaccination Coverage",
        value: 95,
        unit: "%",
        target: ">95%",
        status: "good"
      },
      {
        id: "penta3",
        title: "Penta 3 Vaccination Coverage",
        value: 95,
        unit: "%",
        target: ">95%",
        status: "good"
      },
      {
        id: "water",
        title: "Safe Drinking Water Access",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "sanitation",
        title: "Basic Sanitation Services",
        value: 90.0,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "handwashing",
        title: "Hand-washing Facilities",
        value: 85.5,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "occupational_injuries",
        title: "Occupational Injury Rate",
        value: 7.1,
        unit: "per 1,000",
        target: "<1%",
        status: "critical"
      }
    ]
  },
  warnet: {
    name: "War Net Chaung RHC",
    myanmarName: "ဝါးနက်ချောင်း RHC",
    indicators: [
      {
        id: "mmr",
        title: "Maternal Mortality Ratio",
        value: 0.0,
        unit: "per 100,000 live births",
        target: "< 86",
        status: "good"
      },
      {
        id: "skilled_birth",
        title: "Births Attended by Skilled Personnel",
        value: 87,
        unit: "%",
        target: "> 85%",
        status: "good"
      },
      {
        id: "u5_mortality",
        title: "Under-5 Mortality Rate",
        value: 11.8,
        unit: "per 1,000 live births",
        target: "< 36",
        status: "good"
      },
      {
        id: "neonatal_mortality",
        title: "Neonatal Mortality Rate",
        value: 3.9,
        unit: "per 1,000 live births",
        target: "< 21",
        status: "good"
      },
      {
        id: "infant_mortality",
        title: "Infant Mortality Rate",
        value: 9.8,
        unit: "per 1,000 live births",
        target: "< 32",
        status: "good"
      },
      {
        id: "tb_cnr",
        title: "TB Cases Notification Rate",
        value: 236,
        unit: "per 100,000",
        target: "580",
        status: "good"
      },
      {
        id: "tb_tsr",
        title: "TB Treatment Success Rate",
        value: 94,
        unit: "%",
        target: "88%",
        status: "good"
      },
      {
        id: "malaria_api",
        title: "Annual Malaria Parasite Incidence",
        value: 0.5,
        unit: "per 1,000",
        target: "0",
        status: "warning"
      },
      {
        id: "dengue_cfr",
        title: "Dengue Case Fatality Rate",
        value: 0,
        unit: "%",
        target: "<1%",
        status: "good"
      },
      {
        id: "leprosy",
        title: "New Leprosy Cases",
        value: 4,
        unit: "cases",
        target: "0",
        status: "critical"
      },
      {
        id: "rabies",
        title: "Suspected Rabies Cases",
        value: 1,
        unit: "cases",
        target: "0",
        status: "critical"
      },
      {
        id: "ncd_coverage",
        title: "NCD Clinic Coverage",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "cpr",
        title: "Contraceptive Prevalence Rate",
        value: 68.7,
        unit: "%",
        target: ">60%",
        status: "good"
      },
      {
        id: "abr",
        title: "Adolescent Birth Rate",
        value: 12.9,
        unit: "per 1,000",
        target: "<10%",
        status: "critical"
      },
      {
        id: "bmi",
        title: "Students with BMI <-2SD",
        value: 5.5,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "deworming",
        title: "School Deworming Coverage",
        value: 50,
        unit: "%",
        target: "100%",
        status: "critical"
      },
      {
        id: "underweight",
        title: "Underweight Children (0-59 months)",
        value: 2.91,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "hpv",
        title: "HPV Vaccination Coverage",
        value: 100,
        unit: "%",
        target: ">90%",
        status: "good"
      },
      {
        id: "mr2",
        title: "MR 2 Vaccination Coverage",
        value: 92,
        unit: "%",
        target: ">95%",
        status: "warning"
      },
      {
        id: "penta3",
        title: "Penta 3 Vaccination Coverage",
        value: 97,
        unit: "%",
        target: ">95%",
        status: "good"
      },
      {
        id: "water",
        title: "Safe Drinking Water Access",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "sanitation",
        title: "Basic Sanitation Services",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "handwashing",
        title: "Hand-washing Facilities",
        value: 94.9,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "occupational_injuries",
        title: "Occupational Injury Rate",
        value: 8.8,
        unit: "per 1,000",
        target: "<1%",
        status: "critical"
      }
    ]
  },
  yaeman: {
    name: "Myauk Taka RHC",
    myanmarName: "မြောင်းတကာ RHC",
    indicators: [
      {
        id: "mmr",
        title: "Maternal Mortality Ratio",
        value: 0.0,
        unit: "per 100,000 live births",
        target: "< 86",
        status: "good"
      },
      {
        id: "skilled_birth",
        title: "Births Attended by Skilled Personnel",
        value: 100,
        unit: "%",
        target: "> 85%",
        status: "good"
      },
      {
        id: "u5_mortality",
        title: "Under-5 Mortality Rate",
        value: 3.6,
        unit: "per 1,000 live births",
        target: "< 36",
        status: "good"
      },
      {
        id: "neonatal_mortality",
        title: "Neonatal Mortality Rate",
        value: 0.9,
        unit: "per 1,000 live births",
        target: "< 21",
        status: "good"
      },
      {
        id: "infant_mortality",
        title: "Infant Mortality Rate",
        value: 3.6,
        unit: "per 1,000 live births",
        target: "< 32",
        status: "good"
      },
      {
        id: "tb_cnr",
        title: "TB Cases Notification Rate",
        value: 267,
        unit: "per 100,000",
        target: "580",
        status: "good"
      },
      {
        id: "tb_tsr",
        title: "TB Treatment Success Rate",
        value: 93,
        unit: "%",
        target: "88%",
        status: "good"
      },
      {
        id: "malaria_api",
        title: "Annual Malaria Parasite Incidence",
        value: 1.3,
        unit: "per 1,000",
        target: "0",
        status: "critical"
      },
      {
        id: "dengue_cfr",
        title: "Dengue Case Fatality Rate",
        value: 0,
        unit: "%",
        target: "<1%",
        status: "good"
      },
      {
        id: "leprosy",
        title: "New Leprosy Cases",
        value: 2,
        unit: "cases",
        target: "0",
        status: "critical"
      },
      {
        id: "rabies",
        title: "Suspected Rabies Cases",
        value: 0,
        unit: "cases",
        target: "0",
        status: "good"
      },
      {
        id: "ncd_coverage",
        title: "NCD Clinic Coverage",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "cpr",
        title: "Contraceptive Prevalence Rate",
        value: 65.6,
        unit: "%",
        target: ">60%",
        status: "good"
      },
      {
        id: "abr",
        title: "Adolescent Birth Rate",
        value: 15.4,
        unit: "per 1,000",
        target: "<10%",
        status: "critical"
      },
      {
        id: "bmi",
        title: "Students with BMI <-2SD",
        value: 3.7,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "deworming",
        title: "School Deworming Coverage",
        value: 50,
        unit: "%",
        target: "100%",
        status: "critical"
      },
      {
        id: "underweight",
        title: "Underweight Children (0-59 months)",
        value: 0.76,
        unit: "%",
        target: "0%",
        status: "warning"
      },
      {
        id: "hpv",
        title: "HPV Vaccination Coverage",
        value: 100,
        unit: "%",
        target: ">90%",
        status: "good"
      },
      {
        id: "mr2",
        title: "MR 2 Vaccination Coverage",
        value: 94,
        unit: "%",
        target: ">95%",
        status: "warning"
      },
      {
        id: "penta3",
        title: "Penta 3 Vaccination Coverage",
        value: 95,
        unit: "%",
        target: ">95%",
        status: "good"
      },
      {
        id: "water",
        title: "Safe Drinking Water Access",
        value: 99.6,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "sanitation",
        title: "Basic Sanitation Services",
        value: 87.1,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "handwashing",
        title: "Hand-washing Facilities",
        value: 88.0,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "occupational_injuries",
        title: "Occupational Injury Rate",
        value: 0,
        unit: "per 1,000",
        target: "<1%",
        status: "good"
      }
    ]
  },
  shwethal: {
    name: "Shwe Thal Gyi RHC",
    myanmarName: "ရွှေလှေကြီး RHC",
    indicators: [
      {
        id: "mmr",
        title: "Maternal Mortality Ratio",
        value: 0.0,
        unit: "per 100,000 live births",
        target: "< 86",
        status: "good"
      },
      {
        id: "skilled_birth",
        title: "Births Attended by Skilled Personnel",
        value: 95,
        unit: "%",
        target: "> 85%",
        status: "good"
      },
      {
        id: "u5_mortality",
        title: "Under-5 Mortality Rate",
        value: 11.9,
        unit: "per 1,000 live births",
        target: "< 36",
        status: "good"
      },
      {
        id: "neonatal_mortality",
        title: "Neonatal Mortality Rate",
        value: 7.2,
        unit: "per 1,000 live births",
        target: "< 21",
        status: "good"
      },
      {
        id: "infant_mortality",
        title: "Infant Mortality Rate",
        value: 7.2,
        unit: "per 1,000 live births",
        target: "< 32",
        status: "good"
      },
      {
        id: "tb_cnr",
        title: "TB Cases Notification Rate",
        value: 129,
        unit: "per 100,000",
        target: "580",
        status: "good"
      },
      {
        id: "tb_tsr",
        title: "TB Treatment Success Rate",
        value: 88,
        unit: "%",
        target: "88%",
        status: "good"
      },
      {
        id: "malaria_api",
        title: "Annual Malaria Parasite Incidence",
        value: 0.4,
        unit: "per 1,000",
        target: "0",
        status: "warning"
      },
      {
        id: "dengue_cfr",
        title: "Dengue Case Fatality Rate",
        value: 0,
        unit: "%",
        target: "<1%",
        status: "good"
      },
      {
        id: "leprosy",
        title: "New Leprosy Cases",
        value: 0,
        unit: "cases",
        target: "0",
        status: "good"
      },
      {
        id: "rabies",
        title: "Suspected Rabies Cases",
        value: 0,
        unit: "cases",
        target: "0",
        status: "good"
      },
      {
        id: "ncd_coverage",
        title: "NCD Clinic Coverage",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "cpr",
        title: "Contraceptive Prevalence Rate",
        value: 82.8,
        unit: "%",
        target: ">60%",
        status: "good"
      },
      {
        id: "abr",
        title: "Adolescent Birth Rate",
        value: 16.2,
        unit: "per 1,000",
        target: "<10%",
        status: "critical"
      },
      {
        id: "bmi",
        title: "Students with BMI <-2SD",
        value: 19.4,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "deworming",
        title: "School Deworming Coverage",
        value: 50,
        unit: "%",
        target: "100%",
        status: "critical"
      },
      {
        id: "underweight",
        title: "Underweight Children (0-59 months)",
        value: 4.92,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "hpv",
        title: "HPV Vaccination Coverage",
        value: 100,
        unit: "%",
        target: ">90%",
        status: "good"
      },
      {
        id: "mr2",
        title: "MR 2 Vaccination Coverage",
        value: 97,
        unit: "%",
        target: ">95%",
        status: "good"
      },
      {
        id: "penta3",
        title: "Penta 3 Vaccination Coverage",
        value: 93,
        unit: "%",
        target: ">95%",
        status: "warning"
      },
      {
        id: "water",
        title: "Safe Drinking Water Access",
        value: 94.6,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "sanitation",
        title: "Basic Sanitation Services",
        value: 91.0,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "handwashing",
        title: "Hand-washing Facilities",
        value: 99.8,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "occupational_injuries",
        title: "Occupational Injury Rate",
        value: 6.9,
        unit: "per 1,000",
        target: "<1%",
        status: "critical"
      }
    ]
  },
  yaykyaw: {
    name: "Yay Kyaw RHC",
    myanmarName: "ရေကျော် RHC",
    indicators: [
      {
        id: "mmr",
        title: "Maternal Mortality Ratio",
        value: 0.0,
        unit: "per 100,000 live births",
        target: "< 86",
        status: "good"
      },
      {
        id: "skilled_birth",
        title: "Births Attended by Skilled Personnel",
        value: 88,
        unit: "%",
        target: "> 85%",
        status: "good"
      },
      {
        id: "u5_mortality",
        title: "Under-5 Mortality Rate",
        value: 15.8,
        unit: "per 1,000 live births",
        target: "< 36",
        status: "good"
      },
      {
        id: "neonatal_mortality",
        title: "Neonatal Mortality Rate",
        value: 6.8,
        unit: "per 1,000 live births",
        target: "< 21",
        status: "good"
      },
      {
        id: "infant_mortality",
        title: "Infant Mortality Rate",
        value: 13.6,
        unit: "per 1,000 live births",
        target: "< 32",
        status: "good"
      },
      {
        id: "tb_cnr",
        title: "TB Cases Notification Rate",
        value: 211,
        unit: "per 100,000",
        target: "580",
        status: "good"
      },
      {
        id: "tb_tsr",
        title: "TB Treatment Success Rate",
        value: 96,
        unit: "%",
        target: "88%",
        status: "good"
      },
      {
        id: "malaria_api",
        title: "Annual Malaria Parasite Incidence",
        value: 0.7,
        unit: "per 1,000",
        target: "0",
        status: "warning"
      },
      {
        id: "dengue_cfr",
        title: "Dengue Case Fatality Rate",
        value: 0,
        unit: "%",
        target: "<1%",
        status: "good"
      },
      {
        id: "leprosy",
        title: "New Leprosy Cases",
        value: 1,
        unit: "cases",
        target: "0",
        status: "critical"
      },
      {
        id: "rabies",
        title: "Suspected Rabies Cases",
        value: 0,
        unit: "cases",
        target: "0",
        status: "good"
      },
      {
        id: "ncd_coverage",
        title: "NCD Clinic Coverage",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "cpr",
        title: "Contraceptive Prevalence Rate",
        value: 73.9,
        unit: "%",
        target: ">60%",
        status: "good"
      },
      {
        id: "abr",
        title: "Adolescent Birth Rate",
        value: 12.9,
        unit: "per 1,000",
        target: "<10%",
        status: "critical"
      },
      {
        id: "bmi",
        title: "Students with BMI <-2SD",
        value: 19.9,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "deworming",
        title: "School Deworming Coverage",
        value: 44.3,
        unit: "%",
        target: "100%",
        status: "critical"
      },
      {
        id: "underweight",
        title: "Underweight Children (0-59 months)",
        value: 5.21,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "hpv",
        title: "HPV Vaccination Coverage",
        value: 100,
        unit: "%",
        target: ">90%",
        status: "good"
      },
      {
        id: "mr2",
        title: "MR 2 Vaccination Coverage",
        value: 92,
        unit: "%",
        target: ">95%",
        status: "warning"
      },
      {
        id: "penta3",
        title: "Penta 3 Vaccination Coverage",
        value: 96,
        unit: "%",
        target: ">95%",
        status: "good"
      },
      {
        id: "water",
        title: "Safe Drinking Water Access",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "sanitation",
        title: "Basic Sanitation Services",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "handwashing",
        title: "Hand-washing Facilities",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "occupational_injuries",
        title: "Occupational Injury Rate",
        value: 0,
        unit: "per 1,000",
        target: "<1%",
        status: "good"
      }
    ]
  },
  satthwar: {
    name: "Sat Thwar Taw RHC",
    myanmarName: "ဆပ်သွားတော RHC",
    indicators: [
      {
        id: "mmr",
        title: "Maternal Mortality Ratio",
        value: 154.2,
        unit: "per 100,000 live births",
        target: "< 86",
        status: "critical"
      },
      {
        id: "skilled_birth",
        title: "Births Attended by Skilled Personnel",
        value: 100,
        unit: "%",
        target: "> 85%",
        status: "good"
      },
      {
        id: "u5_mortality",
        title: "Under-5 Mortality Rate",
        value: 6.2,
        unit: "per 1,000 live births",
        target: "< 36",
        status: "good"
      },
      {
        id: "neonatal_mortality",
        title: "Neonatal Mortality Rate",
        value: 3.1,
        unit: "per 1,000 live births",
        target: "< 21",
        status: "good"
      },
      {
        id: "infant_mortality",
        title: "Infant Mortality Rate",
        value: 4.6,
        unit: "per 1,000 live births",
        target: "< 32",
        status: "good"
      },
      {
        id: "tb_cnr",
        title: "TB Cases Notification Rate",
        value: 238,
        unit: "per 100,000",
        target: "580",
        status: "good"
      },
      {
        id: "tb_tsr",
        title: "TB Treatment Success Rate",
        value: 95,
        unit: "%",
        target: "88%",
        status: "good"
      },
      {
        id: "malaria_api",
        title: "Annual Malaria Parasite Incidence",
        value: 0.3,
        unit: "per 1,000",
        target: "0",
        status: "warning"
      },
      {
        id: "dengue_cfr",
        title: "Dengue Case Fatality Rate",
        value: 2.4,
        unit: "%",
        target: "<1%",
        status: "critical"
      },
      {
        id: "leprosy",
        title: "New Leprosy Cases",
        value: 2,
        unit: "cases",
        target: "0",
        status: "critical"
      },
      {
        id: "rabies",
        title: "Suspected Rabies Cases",
        value: 0,
        unit: "cases",
        target: "0",
        status: "good"
      },
      {
        id: "ncd_coverage",
        title: "NCD Clinic Coverage",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "cpr",
        title: "Contraceptive Prevalence Rate",
        value: 62.7,
        unit: "%",
        target: ">60%",
        status: "good"
      },
      {
        id: "abr",
        title: "Adolescent Birth Rate",
        value: 16.9,
        unit: "per 1,000",
        target: "<10%",
        status: "critical"
      },
      {
        id: "bmi",
        title: "Students with BMI <-2SD",
        value: 2.4,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "deworming",
        title: "School Deworming Coverage",
        value: 50,
        unit: "%",
        target: "100%",
        status: "critical"
      },
      {
        id: "underweight",
        title: "Underweight Children (0-59 months)",
        value: 1.51,
        unit: "%",
        target: "0%",
        status: "critical"
      },
      {
        id: "hpv",
        title: "HPV Vaccination Coverage",
        value: 100,
        unit: "%",
        target: ">90%",
        status: "good"
      },
      {
        id: "mr2",
        title: "MR 2 Vaccination Coverage",
        value: 96,
        unit: "%",
        target: ">95%",
        status: "good"
      },
      {
        id: "penta3",
        title: "Penta 3 Vaccination Coverage",
        value: 97,
        unit: "%",
        target: ">95%",
        status: "good"
      },
      {
        id: "water",
        title: "Safe Drinking Water Access",
        value: 100,
        unit: "%",
        target: "100%",
        status: "good"
      },
      {
        id: "sanitation",
        title: "Basic Sanitation Services",
        value: 86.3,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "handwashing",
        title: "Hand-washing Facilities",
        value: 97.4,
        unit: "%",
        target: "100%",
        status: "warning"
      },
      {
        id: "occupational_injuries",
        title: "Occupational Injury Rate",
        value: 0,
        unit: "per 1,000",
        target: "<1%",
        status: "good"
      }
    ]
  }
};