const DATA = [
  {
    fieldName: 'Database Identifiers',
    children: [
      {
        fieldName: 'specimen collector sample ID',
        dataType: 'text',
        requirement: 'required',
        vocabulary: {}
      },
      {
        fieldName: 'PHAC sample ID',
        dataType: 'text',
        requirement: 'recommended',
        vocabulary: {}
      },
      {
        fieldName: 'IRIDA sample name',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'umbrella bioproject accession',
        dataType: 'select',
        requirement: '',
        vocabulary: {
          'PRJNA623807': {}
        }
      },
      {
        fieldName: 'bioproject accession',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'biosample accession',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'SRA accession',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'GenBank accession',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'GISAID accession',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      }
    ]
  },
  {
    fieldName: 'Sample collection and processing',
    children: [
      {
        fieldName: 'sample collected by',
        dataType: 'text',
        requirement: 'required',
        vocabulary: {}
      },
      {
        fieldName: 'sample collector contact email',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'sample collector contact address',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'sequence submitted by',
        dataType: 'text',
        requirement: 'required',
        vocabulary: {}
      },
      {
        fieldName: 'sequence submitter contact email',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'sequence submitter contact address',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'sample collection date',
        dataType: 'date',
        requirement: 'required',
        vocabulary: {}
      },
      {
        fieldName: 'geo_loc_name (country)',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'Afghanistan': {},
          'Albania': {},
          'Algeria': {},
          'American Samoa': {},
          'Andorra': {},
          'Angola': {},
          'Anguilla': {},
          'Antarctica': {},
          'Antigua and Barbuda': {},
          'Argentina': {},
          'Armenia': {},
          'Aruba': {},
          'Ashmore and Cartier Islands': {},
          'Australia': {},
          'Austria': {},
          'Azerbaijan': {},
          'Bahamas': {},
          'Bahrain': {},
          'Baker Island': {},
          'Bangladesh': {},
          'Barbados': {},
          'Bassas da India': {},
          'Belarus': {},
          'Belgium': {},
          'Belize': {},
          'Benin': {},
          'Bermuda': {},
          'Bhutan': {},
          'Bolivia': {},
          'Borneo': {},
          'Bosnia and Herzegovina': {},
          'Botswana': {},
          'Bouvet Island': {},
          'Brazil': {},
          'British Virgin Islands': {},
          'Brunei': {},
          'Bulgaria': {},
          'Burkina Faso': {},
          'Burundi': {},
          'Cambodia': {},
          'Cameroon': {},
          'Canada': {},
          'Cape Verde': {},
          'Cayman Islands': {},
          'Central African Republic': {},
          'Chad': {},
          'Chile': {},
          'China': {},
          'Christmas Island': {},
          'Clipperton Island': {},
          'Cocos Islands': {},
          'Colombia': {},
          'Comoros': {},
          'Cook Islands': {},
          'Coral Sea Islands': {},
          'Costa Rica': {},
          'Cote d\'Ivoire': {},
          'Croatia': {},
          'Cuba': {},
          'Curacao': {},
          'Cyprus': {},
          'Czech Republic': {},
          'Democratic Republic of the Congo': {},
          'Denmark': {},
          'Djibouti': {},
          'Dominica': {},
          'Dominican Republic': {},
          'Ecuador': {},
          'Egypt': {},
          'El Salvador': {},
          'Equatorial Guinea': {},
          'Eritrea': {},
          'Estonia': {},
          'Eswatini': {},
          'Ethiopia': {},
          'Europa Island': {},
          'Falkland Islands (Islas Malvinas)': {},
          'Faroe Islands': {},
          'Fiji': {},
          'Finland': {},
          'France': {},
          'French Guiana': {},
          'French Polynesia': {},
          'French Southern and Antarctic Lands': {},
          'Gabon': {},
          'Gambia': {},
          'Gaza Strip': {},
          'Georgia': {},
          'Germany': {},
          'Ghana': {},
          'Gibraltar': {},
          'Glorioso Islands': {},
          'Greece': {},
          'Greenland': {},
          'Grenada': {},
          'Guadeloupe': {},
          'Guam': {},
          'Guatemala': {},
          'Guernsey': {},
          'Guinea': {},
          'Guinea-Bissau': {},
          'Guyana': {},
          'Haiti': {},
          'Heard Island and McDonald Islands': {},
          'Honduras': {},
          'Hong Kong': {},
          'Howland Island': {},
          'Hungary': {},
          'Iceland': {},
          'India': {},
          'Indonesia': {},
          'Iran': {},
          'Iraq': {},
          'Ireland': {},
          'Isle of Man': {},
          'Israel': {},
          'Italy': {},
          'Jamaica': {},
          'Jan Mayen': {},
          'Japan': {},
          'Jarvis Island': {},
          'Jersey': {},
          'Johnston Atoll': {},
          'Jordan': {},
          'Juan de Nova Island': {},
          'Kazakhstan': {},
          'Kenya': {},
          'Kerguelen Archipelago': {},
          'Kingman Reef': {},
          'Kiribati': {},
          'Kosovo': {},
          'Kuwait': {},
          'Kyrgyzstan': {},
          'Laos': {},
          'Latvia': {},
          'Lebanon': {},
          'Lesotho': {},
          'Liberia': {},
          'Libya': {},
          'Liechtenstein': {},
          'Line Islands': {},
          'Lithuania': {},
          'Luxembourg': {},
          'Macau': {},
          'Madagascar': {},
          'Malawi': {},
          'Malaysia': {},
          'Maldives': {},
          'Mali': {},
          'Malta': {},
          'Marshall Islands': {},
          'Martinique': {},
          'Mauritania': {},
          'Mauritius': {},
          'Mayotte': {},
          'Mexico': {},
          'Micronesia': {},
          'Midway Islands': {},
          'Moldova': {},
          'Monaco': {},
          'Mongolia': {},
          'Montenegro': {},
          'Montserrat': {},
          'Morocco': {},
          'Mozambique': {},
          'Myanmar': {},
          'Namibia': {},
          'Nauru': {},
          'Navassa Island': {},
          'Nepal': {},
          'Netherlands': {},
          'New Caledonia': {},
          'New Zealand': {},
          'Nicaragua': {},
          'Niger': {},
          'Nigeria': {},
          'Niue': {},
          'Norfolk Island': {},
          'North Korea': {},
          'North Macedonia': {},
          'North Sea': {},
          'Northern Mariana Islands': {},
          'Norway': {},
          'Oman': {},
          'Pakistan': {},
          'Palau': {},
          'Panama': {},
          'Papua New Guinea': {},
          'Paracel Islands': {},
          'Paraguay': {},
          'Peru': {},
          'Philippines': {},
          'Pitcairn Islands': {},
          'Poland': {},
          'Portugal': {},
          'Puerto Rico': {},
          'Qatar': {},
          'Republic of the Congo': {},
          'Reunion': {},
          'Romania': {},
          'Ross Sea': {},
          'Russia': {},
          'Rwanda': {},
          'Saint Helena': {},
          'Saint Kitts and Nevis': {},
          'Saint Lucia': {},
          'Saint Pierre and Miquelon': {},
          'Saint Martin': {},
          'Saint Vincent and the Grenadines': {},
          'Samoa': {},
          'San Marino': {},
          'Sao Tome and Principe': {},
          'Saudi Arabia': {},
          'Senegal': {},
          'Serbia': {},
          'Seychelles': {},
          'Sierra Leone': {},
          'Singapore': {},
          'Sint Maarten': {},
          'Slovakia': {},
          'Slovenia': {},
          'Solomon Islands': {},
          'Somalia': {},
          'South Africa': {},
          'South Georgia and the South Sandwich Islands': {},
          'South Korea': {},
          'South Sudan': {},
          'Spain': {},
          'Spratly Islands': {},
          'Sri Lanka': {},
          'State of Palestine': {},
          'Sudan': {},
          'Suriname': {},
          'Svalbard': {},
          'Swaziland': {},
          'Sweden': {},
          'Switzerland': {},
          'Syria': {},
          'Taiwan': {},
          'Tajikistan': {},
          'Tanzania': {},
          'Thailand': {},
          'Timor-Leste': {},
          'Togo': {},
          'Tokelau': {},
          'Tonga': {},
          'Trinidad and Tobago': {},
          'Tromelin Island': {},
          'Tunisia': {},
          'Turkey': {},
          'Turkmenistan': {},
          'Turks and Caicos Islands': {},
          'Tuvalu': {},
          'USA': {},
          'Uganda': {},
          'Ukraine': {},
          'United Arab Emirates': {},
          'United Kingdom': {},
          'Uruguay': {},
          'Uzbekistan': {},
          'Vanuatu': {},
          'Venezuela': {},
          'Viet Nam': {},
          'Virgin Islands': {},
          'Wake Island': {},
          'Wallis and Futuna': {},
          'West Bank': {},
          'Western Sahara': {},
          'Yemen': {},
          'Zambia': {},
          'Zimbabwe': {}
        }
      },
      {
        fieldName: 'geo_loc_name (province/territory)',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'ALBERTA': {},
          'BRITISH COLUMBIA': {},
          'MANITOBA': {},
          'NEW BRUNSWICK': {},
          'NEWFOUNDLAND': {},
          'NORTHWEST TERRITORIES': {},
          'NOVA SCOTIA': {},
          'NUNAVUT': {},
          'ONTARIO': {},
          'PRINCE EDWARD ISLAND': {},
          'QUEBEC': {},
          'SASKATCHEWAN': {},
          'YUKON TERRITORY': {}
        }
      },
      {
        fieldName: 'geo_loc_name (city)',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'organism',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'SARS-CoV-2': {},
          'RaTG13': {},
          'RmYN02': {}
        }
      },
      {
        fieldName: 'isolate',
        dataType: 'text',
        requirement: 'required',
        vocabulary: {}
      },
      {
        fieldName: 'purpose of sampling',
        dataType: 'select',
        requirement: 'recommended',
        vocabulary: {
          'Cluster investigation': {},
          'Diagnostic testing': {},
          'Research': {},
          'Surveillance testing': {},
          'Viral passage experiment': {}
        }
      },
      {
        fieldName: 'anatomical material',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'Blood': {},
          'Fluid': {},
          '   Fluid (oral)': {},
          '      Saliva': {},
          '   Fluid (cerebrospinal (CSF))': {},
          '   Fluid (pericardial)': {},
          '   Fluid (pleural)': {},
          '   Fluid (vaginal)': {},
          '   Fluid (amniotic)': {},
          '   Fluid (seminal)': {},
          'Tissue': {}
        }
      },
      {
        fieldName: 'anatomical part',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'Anus': {},
          'Duodenum': {},
          'Eye': {},
          'Intestine': {},
          'Rectum': {},
          'Skin': {},
          'Stomach': {},
          'Upper respiratory tract': {},
          '   Anterior Nares': {},
          '   Esophagus': {},
          '   Ethmoid sinus': {},
          '   Nasal Cavity': {},
          '     Middle Nasal Turbinate': {},
          '     Inferior Nasal Turbinate': {},
          '   Nasopharynx (NP)': {},
          '   Oropharynx (OP)': {},
          'Lower respiratory tract': {},
          '   Bronchus': {},
          '   Lung': {},
          '     Bronchiole': {},
          '     Alveolar sac': {},
          '   Pleural sac': {},
          '     Pleural cavity': {},
          '   Trachea': {}
        }
      },
      {
        fieldName: 'body product',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'Feces': {},
          'Urine': {},
          'Sweat': {},
          'Mucus': {},
          '   Sputum': {},
          'Tear': {}
        }
      },
      {
        fieldName: 'environmental material',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'Banknote': {},
          'Bathroom': {},
          'Bed rail': {},
          'Building floor': {},
          'Cloth': {},
          'Control panel': {},
          'Corridor': {},
          'Door  ': {},
          'Door handle': {},
          'Face mask': {},
          'Face shield': {},
          'Glass': {},
          'Handrail': {},
          'Hospital gown': {},
          'Light switch': {},
          'Locker': {},
          'N95 mask': {},
          'Nurse call button ': {},
          'Paper': {},
          'Plastic': {},
          'PPE gown': {},
          'Sewage': {},
          'Sink': {},
          'Soil': {},
          'Stainless steel': {},
          'Tissue paper': {},
          'Toilet bowl': {},
          'Water': {},
          'Window': {},
          'Wood': {}
        }
      },
      {
        fieldName: 'environmental site',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'Acute care facility': {},
          'Air vent': {},
          'Animal house': {},
          'Clinical assessment centre': {},
          'Conference venue': {},
          'Daycare': {},
          'Emergency room (ER)': {},
          'Family practice clinic': {},
          'Group home': {},
          'Homeless shelter': {},
          'Hospital': {},
          'Intensive Care Unit (ICU)': {},
          'Long Term Care Facility': {},
          'Patient room': {},
          'Prison': {},
          'Production Facility': {},
          'School': {},
          'Subway train': {},
          'Wet market': {}
        }
      },
      {
        fieldName: 'collection device',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'Air filter': {},
          'Blood Collection Tube': {},
          'Bronchoscope': {},
          'Collection Container': {},
          'Collection Cup': {},
          'Fibrobronchoscope Brush': {},
          'Fine Needle': {},
          'Microcapillary tube': {},
          'Micropipette': {},
          'Needle': {},
          'Serum Collection Tube': {},
          'Sputum Collection Tube': {},
          'Suction Catheter': {},
          'Swab': {},
          'Urine Collection Tube': {},
          'Virus Transport Medium': {}
        }
      },
      {
        fieldName: 'collection method',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'Amniocentesis': {},
          'Aspiration': {},
          '  Suprapubic Aspiration': {},
          '  Tracheal aspiration': {},
          '  Vacuum Aspiration': {},
          'Biopsy': {},
          '  Needle Biopsy': {},
          'Lavage': {},
          '  Bronchoalveolar lavage (BAL)': {},
          '  Gastric Lavage': {},
          'Lumbar Puncture': {},
          'Necropsy': {},
          'Phlebotomy': {},
          'Rinsing': {},
          'Scraping': {},
          'Swab': {},
          '  Finger Prick': {},
          'Wash': {},
          'Washout Tear Collection': {}
        }
      },
      {
        fieldName: 'collection protocol',
        dataType: 'select',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'specimen processing',
        dataType: 'select',
        requirement: 'recommended',
        vocabulary: {
          'Virus passage': {}
        }
      },
      {
        fieldName: 'lab host',
        dataType: 'select',
        requirement: 'recommended',
        vocabulary: {
          '293/ACE2 cell line': {},
          'Caco2 cell line': {},
          'Calu3 cell line': {},
          'EFK3B cell line': {},
          'HEK293T cell line': {},
          'HRCE cell line': {},
          'Huh7 cell line': {},
          'LLCMk2 cell line': {},
          'MDBK cell line': {},
          'Mv1Lu cell line': {},
          'NHBE cell line': {},
          'PK-15 cell line': {},
          'RK-13 cell line': {},
          'U251 cell line': {},
          'Vero cell line': {},
          '   Vero E6 cell line': {},
          '      VeroE6/TMPRSS2 cell line': {}
        }
      },
      {
        fieldName: 'passage number',
        dataType: 'integer',
        requirement: 'recommended',
        vocabulary: {}
      },
      {
        fieldName: 'passage method',
        dataType: 'text',
        requirement: 'recommended',
        vocabulary: {}
      },
      {
        fieldName: 'biomaterial extracted',
        dataType: 'select',
        requirement: '',
        vocabulary: {
          'RNA (total),': {},
          'RNA (poly-A),': {},
          'RNA (ribo-depleted),': {},
          'mRNA (cDNA)': {}
        }
      }
    ]
  },
  {
    fieldName: 'Host Information',
    children: [
      {
        fieldName: 'host (common name)',
        dataType: 'select',
        requirement: '',
        vocabulary: {
          'Human': {},
          'Bat': {},
          'Cat': {},
          'Chicken': {},
          'Civets': {},
          'Cow': {},
          'Dog': {},
          'Lion': {},
          'Pangolin': {},
          'Pig': {},
          'Pigeon': {},
          'Tiger': {}
        }
      },
      {
        fieldName: 'host (scientific name)',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'Homo sapiens': {},
          'Bos taurus': {},
          'Canis lupus familiaris': {},
          'Chiroptera': {},
          'Columbidae': {},
          'Felis catus': {},
          'Gallus gallus': {},
          'Manis': {},
          'Manis javanica': {},
          'Panthera leo': {},
          'Panthera tigris': {},
          'Rhinolophidae': {},
          'Rhinolophus affinis': {},
          'Sus scrofa domesticus': {},
          'Viverridae': {}
        }
      },
      {
        fieldName: 'host health state',
        dataType: 'select',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'host health status details',
        dataType: 'select',
        requirement: '',
        vocabulary: {
          'Self-quarantining': {},
          'Asymptomatic': {},
          'Symptomatic': {},
          'Hospitalized (ICU)': {}
        }
      },
      {
        fieldName: 'host disease',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {}
      },
      {
        fieldName: 'host age',
        dataType: 'decimal',
        requirement: 'required',
        vocabulary: {}
      },
      {
        fieldName: 'host gender',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {}
      },
      {
        fieldName: 'host origin geo_loc name (country)',
        dataType: 'select',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'host subject ID',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'symptom onset date',
        dataType: 'date',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'signs and symptoms',
        dataType: 'multiple',
        requirement: '',
        vocabulary: {
          'Ageusia': {},
          'Anosmia': {},
          'Arthralgia (painful joints)': {},
          'Asthenia': {},
          'Chest Pain': {},
          'Chills': {},
          'Coma': {},
          'Confusion ': {},
          'Conjunctivitis ': {},
          'Cough ': {},
          'Delirium': {},
          'Diarrhea': {},
          'Dysgeusia': {},
          'Encephalitis ': {},
          'Fatigue': {},
          'Fever': {},
          'Headache': {},
          'Hemoptysis': {},
          'Hypogeusia': {},
          'Hyposmia': {},
          'Hypotension (low blood pressure)': {},
          'Hypoxemia': {},
          'Irritability': {},
          'Loss of speech': {},
          'Loss of taste': {},
          'Low appetite': {},
          'Malaise': {},
          'Myalgia (muscle pain) ': {},
          'Nasal obstruction (stuffy nose)': {},
          'Nausea': {},
          'Pharyngitis (sore throat) ': {},
          'Rash': {},
          'Rhinorrhea (runny nose)': {},
          'Seizure': {},
          'Shortness of breath (breathing difficulty) ': {},
          'Slurred speech': {},
          'Tachypnea (rapid breathing)': {},
          'Vomiting': {},
          'Weakness': {}
        }
      }
    ]
  },
  {
    fieldName: 'Host exposure information',
    children: [
      {
        fieldName: 'location of exposure geo_loc name (country)',
        dataType: 'select',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'travel history',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'exposure event',
        dataType: 'select',
        requirement: '',
        vocabulary: {
          'mass gathering (convention),': {},
          'mass gathering (religious),': {},
          'mass gathering (social e.g. funeral, wedding etc.),': {},
          'mass gathering (office),': {},
          'occupational exposure (hospital worker),': {},
          'occupational exposure (hospital visit),': {},
          'occupational exposure (frontline response),': {},
          'occupational exposure (healthcare work with the public),': {},
          'occupational exposure (retail),': {},
          'occupational exposure (restaurant)': {}
        }
      }
    ]
  },
  {
    fieldName: 'Sequencing',
    children: [
      {
        fieldName: 'library ID',
        dataType: 'text',
        requirement: 'recommended',
        vocabulary: {}
      },
      {
        fieldName: 'sequencing instrument',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {
          'ILLUMINA': {},
          '   HiSeq X ': {},
          '      HiSeq X Five': {},
          '      HiSeq X Ten': {},
          '   Illumina Genome Analyzer': {},
          '      Illumina Genome Analyzer II': {},
          '      Illumina Genome Analyzer IIx': {},
          '   Illumina HiScanSQ': {},
          '   Illumina HiSeq 1000': {},
          '   Illumina HiSeq 1500': {},
          '   Illumina HiSeq 2000': {},
          '   Illumina HiSeq 2500': {},
          '   Illumina HiSeq 3000': {},
          '   Illumina HiSeq 4000': {},
          '   Illumina iSeq 100': {},
          '   Illumina NovaSeq 6000': {},
          '   Illumina MiniSeq': {},
          '   Illumina MiSeq': {},
          '   NextSeq 500': {},
          '   NextSeq 550': {},
          'Pacific Biosciences': {},
          '   PacBio RS': {},
          '   PacBio RS II': {},
          '   PacBio Sequel': {},
          '   PacBio Sequel II': {},
          'Ion Torrent': {},
          '   Ion Torrent PGM': {},
          '   Ion Torrent Proton': {},
          '   Ion Torrent S5 XL': {},
          '   Ion Torrent S5': {},
          'Oxford Nanopore': {},
          '   GridION': {},
          '   MinION': {},
          '   PromethION': {},
          'BGI Genomics': {},
          '   BGISEQ-500': {},
          '* I have Applied Bioscience models too - include?': {}
        }
      },
      {
        fieldName: 'sequencing protocol name',
        dataType: 'text',
        requirement: 'recommended',
        vocabulary: {}
      },
      {
        fieldName: 'sequencing protocol source',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'sequencing kit number',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'amplicon pcr primers filename',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      }
    ]
  },
  {
    fieldName: 'Bioinformatics and QC metrics',
    children: [
      {
        fieldName: 'raw sequence data processing',
        dataType: 'text',
        requirement: 'recommended',
        vocabulary: {}
      },
      {
        fieldName: 'sequencing depth (average)',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'assembly name',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'assembly method',
        dataType: 'select',
        requirement: 'required',
        vocabulary: {}
      },
      {
        fieldName: 'assembly coverage breadth',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'assembly coverage depth',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'r1 fastq filename        ',
        dataType: 'text',
        requirement: 'recommended',
        vocabulary: {}
      },
      {
        fieldName: 'r2 fastq filename',
        dataType: 'text',
        requirement: 'recommended',
        vocabulary: {}
      },
      {
        fieldName: 'fasta filename',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'number base pairs',
        dataType: 'integer',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'genome length',
        dataType: 'integer',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'mean contig length',
        dataType: 'integer',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'N50',
        dataType: 'integer',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'Ns per 100 kbp',
        dataType: 'decimal',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'reference genome accession',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'consensus sequence ID',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'consensus sequence method',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'annotation feature table filename',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'bioinformatics protocol',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      }
    ]
  },
  {
    fieldName: 'Pathogen diagnostic testing',
    children: [
      {
        fieldName: 'gene name 1',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'diagnostic pcr protocol 1',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'diagnostic pcr Ct value 1',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'gene name 2',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'diagnostic pcr protocol 2',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      },
      {
        fieldName: 'diagnostic pcr Ct value 2',
        dataType: 'text',
        requirement: '',
        vocabulary: {}
      }
    ]
  },
  {
    fieldName: 'Contributor acknowledgement',
    children: [
      {
        fieldName: 'authors',
        dataType: 'text',
        requirement: 'recommended',
        vocabulary: {}
      }
    ]
  }
]