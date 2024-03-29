import ironOralSpray from "./data/ironoralspray"
import multiVitaminOralSpray from "./data/multivitaminspray"
import * as AZITHROMYCIN from './data/Suspensions/AZITHROMYCIN';
import * as OFLOXACIN from './data/Suspensions/OFLOXACIN';
import * as OFLOXACIN0 from './data/Suspensions/OFLOXACIN + TINIDAZOLE';
import * as OFLOXACIN1 from './data/Suspensions/OFLOXACIN + ORNIDAZOLE';
import * as ROXITHROMYCIN from './data/Suspensions/ROXITHROMYCIN';
import * as OFLOXACIN2 from './data/Suspensions/OFLOXACIN +  NITOZOXANIDE';
import * as OFLOXACIN3 from './data/Suspensions/OFLOXACIN +  METRONIDAZOLE';
import * as PCM4 from './data/Suspensions/PCM    +   CPM    +   PHENYLEPHRINE HCL     +   SODIUM CITRATE     +   MENTHOL';
import * as CPM5 from './data/Suspensions/CPM    +   PCM   +   PHENYLEPHERINE HCL';
import * as CETIRIZINE6 from './data/Suspensions/CETIRIZINE HCL    +   PCM     +   PHENYLEPHERINE HCL';
import * as CETIRIZINE7 from './data/Suspensions/CETIRIZINE DIHCL';
import * as LEVOCETIRIZINE8 from './data/Suspensions/LEVOCETIRIZINE DIHCL';
import * as DICYCLOMINE9 from './data/Suspensions/DICYCLOMINE HCL + PCM';
import * as FEXOFENADINE10 from './data/Suspensions/FEXOFENADINE HCL';
import * as DEXTROMETHORPHAN11 from './data/Suspensions/DEXTROMETHORPHAN HYDROBROMIDE + CHLORPHENIRAMINE MALEATE';
import * as DEFLAZACORT from './data/Suspensions/DEFLAZACORT';
import * as PROMETHAZINE12 from './data/Suspensions/PROMETHAZINE HCL';
import * as PCM13 from './data/Suspensions/PCM     +   PROMETHAZINE HCL';
import * as MEGALDRATE14 from './data/Suspensions/MEGALDRATE   +   SIMETHICON';
import * as OXETACAINE15 from './data/Suspensions/OXETACAINE    +   ALUMINIUM HYDRIXIDE   +   MAGNESIUM HYDROXIDE';
import * as ACTIVATED16 from './data/Suspensions/ACTIVATED DIMETHICON    +   MAGNESIUM HYDRO    +   DRIED ALIMINIUM HYDRO';
import * as AMOXYCILLIN from './data/Syrups/AMOXYCILLIN';
import * as CEFIXIME from './data/Syrups/CEFIXIME';
import * as CEFPODOXIME from './data/Syrups/CEFPODOXIME';
import * as CEFIXIME0 from './data/Syrups/CEFIXIME + OFLOXACIN';
import * as IRONHYDROXIDE1 from './data/Syrups/IRON(III)HYDROXIDE POLYMALTOSE COMPLEX  +  FOLIC ACID';
import * as FERRIC2 from './data/Syrups/FERRIC AMMONIUM CITRATE    +  CYANOCOBALAMIN    +  FOLIC ACID    +  CUPRIC SULPHATE   +  MANGANESE SULPHATE';
import * as MULTIFORMULA3 from './data/Syrups/MULTIFORMULA ………. (FOOD)';
import * as FERROUS4 from './data/Syrups/FERROUS ASCORBATE   +  FOLIC ACID';
import * as FERRIC5 from './data/Syrups/FERRIC AMMONIUM CITRATE    +  FOLIC ACID    +   CYANOCOBALAMINE   +  SORBITOL SOL (70%)  Q.S.';
import * as IRON6 from './data/Syrups/IRON (III) HYDROXIDE POLYMALTOSE';
import * as ENZYME7 from './data/Syrups/ENZYME FORMULA (IN FOOD)';
import * as CALCIUM8 from './data/Syrups/CALCIUM  +  D3   +   B12';
import * as CALCIUM9 from './data/Syrups/CALCIUM CARBONATE  (EQ. TO ELEMENTAL CALCIUM)   +    D3';
import * as FERRIC10 from './data/Syrups/FERRIC AMMONIUM CITRATE  (EQ TO ELEMENTAL IRON )  +   FOLIC ACID    +  CYANOCOBALAMIN';
import * as FERRIC11 from './data/Syrups/FERRIC AMM. CIT.  (EQ. TO ELEMENTAL IRON )  +  CYANOCO.    +  FOLIC ACID   + ZINC SUL.  +  PYRIDOXINE HCL   +  SORBITOL (70%)';
import * as PYRIDOXINE12 from './data/Syrups/PYRIDOXINE HCL   +  NICOTINAMIDE   +  CYANOCOBALAMIN   +   LYSINE HCL';
import * as LYCOPENE13 from './data/Syrups/LYCOPENE FORMULA ……………….(IN FOOD)';
// import * as ALPHA14 from './data/Syrups/ALPHA AMYLASE   ( BACTERIAL 1:800)  +   PAPAIN';
import * as LYSINE15 from './data/Syrups/L-LYSINE   + NICOTINAMIDE     +  D-PANTHENOL   +   RIBO. SOD. PHOS.   +  THIAMINE HCL   + PYRIDOXINE HCL    +  CYANOC. (IN FOOD)';
import * as CYPROHEPTADINE16 from './data/Syrups/CYPROHEPTADINE HCL    +   TRICHOLINE CITRATE';
import * as TRICHOLINE17 from './data/Syrups/TRICHOLINE CITRATE    SORBITOL SOLUTION (70%)  Q.S';
import * as FERROUS18 from './data/Syrups/FERROUS GLUCONATE   (EQ. TO  ELEMENTAL IRON)  +   FOLIC ACID   +  B12     +   CALCIUM LACTATE';
import * as PROTEIN19 from './data/Syrups/PROTEIN FORMULA…………………(IN DRUG)';
import * as DOMPERIDONE from './data/Syrups/DOMPERIDONE';
import * as ONDANSETRON from './data/Syrups/ONDANSETRON';
import * as DIPHENHYDRAMINE20 from './data/Syrups/DIPHENHYDRAMINE + AMONIUM CHLORIDE + SODIUM CITRATE + MENTHOL';
import * as TERBUTALINE21 from './data/Syrups/TERBUTALINE SULPHATE  +  GUAIPHENESIN  +   BROMHEXINE HCL      +  MENTHOL';
import * as TERBUTALINE22 from './data/Syrups/TERBUTALINE SULPHATE      +  GUAIPHENESIN    +  AMBROXOL HCL     +  MENTHOL';
import * as DIPHENHYDRAMINE23 from './data/Syrups/DIPHENHYDRAMINE HCL  +  TERPINE HYDRATE  +   AMMONIUM CHLORIDE  +  SODIUM CITRATE +   MENTHOL';
import * as DEXTROMETHORPHAN24 from './data/Syrups/DEXTROMETHORPHAN HBR  +  PHENYLEPHRINE HCL  +  CPM';
import * as DEXTROMETHORPHAN25 from './data/Syrups/DEXTROMETHORPHAN HBR    +  PHENYLEPHRINE HCL    +  CPM    +  PCM';
import * as DEXTROMETHORPHAN26 from './data/Syrups/DEXTROMETHORPHAN HBR  +   CPM';
import * as CETIRIZINE27 from './data/Syrups/CETIRIZINE DIHCL      +   AMBROXOL HCL';
import * as AMBROXOL28 from './data/Syrups/AMBROXOL HCL   +  GUAIPHENESIN   +  PHENYLEPHERINE HCL   +  CPM  +  MENTHOL';
import * as CPM29 from './data/Syrups/CPM    +  SODIUM CITRATE  +  AMMONIUM CHLORIDE';
import * as DEXTROMETHORPHEN30 from './data/Syrups/DEXTROMETHORPHEN HBR    +  CPM     +   GUAIPHENESIN     +  AMMONIUM CHLORIDE';
import * as DEXTROMETHORPHAN31 from './data/Syrups/DEXTROMETHORPHAN HBR   +  CETIRIZINE HCL     +  PHENYLEPHRINE HCL      +  MENTHOL';
import * as AMBROXOL32 from './data/Syrups/AMBROXOL HCL   +  LEVOCETIRIZINE HCL   +  GUAIPHENESIN    +  PHENYLEPHRINE HCL';
import * as DMR33 from './data/Syrups/DMR    +  AMMONIUM  +  BROMHEXINE   +  MENTHOL';
import * as SODIUM0 from './data/External Preparations/SODIUM CHLORIDE + BENZOLEKONIUM + PHENYLMERCURIC ACETATE';
import * as XYLOMETAZOLINE1 from './data/External Preparations/XYLOMETAZOLINE HCL NASAL DROPS & SPRAY';
import * as POTASSIUM2 from './data/External Preparations/POTASSIUM  NITRATE    +  SODIUM FLUORIDE';
import * as POTASSIUM3 from './data/External Preparations/POTASSIUM  NITRATE';
import * as DICLOFENAC4 from './data/External Preparations/DICLOFENAC DIETHYLAMINE  EQ. DICOFENAC SODIUM';
import * as ADAPALENE5 from './data/External Preparations/ADAPALENE    +  CLINDAMYCIN PHOSPHATE';
import * as CLINDAMYCIN6 from './data/External Preparations/CLINDAMYCIN PHOSPHATE  +  NICOTINAMIDE';
import * as MOMETASONE7 from './data/External Preparations/MOMETASONE FUROATE';
import * as DICLOFENAC8 from './data/External Preparations/DICLOFENAC DIETHYLAMINE   +  METHYL SALICYLATE    +  MENTHOL   +  LINSEED OIL    +  BENZYL ALCOHOL';
import * as CLOBETASOL9 from './data/External Preparations/CLOBETASOL PROPIONATE    +  NEOMYCIN SULPHATE     +  MICONAZOLE NITRATE    +  CHLOROCRESOL';
import * as FLUTICASONE10 from './data/External Preparations/FLUTICASONE  PROPIONATE    +   IMIDUREA';
import * as FLUTICASONE11 from './data/External Preparations/FLUTICASONE  PROPIONATE';
import * as UREA12 from './data/External Preparations/UREA    +  LACTIC ACID   +  PROPYLENE GLYCOL    +  LIQUID PARAFFIN   +  METHYL PARABEN  +  PROPYPARABEN';
import * as BECLOMETHASONE13 from './data/External Preparations/BECLOMETHASONE DIPROPIONATE   +  SALICYLIC ACID';
import * as BECLOMETHASONE14 from './data/External Preparations/BECLOMETHASONE DIPROPIONATE    +  CLOTRIMAZOLE    +  NEOMYCIN SULPHATE    +  CHLOROCRESOL';
import * as CLOTRIMAZOLE15 from './data/External Preparations/CLOTRIMAZOLE   +  BECLOMETHASONE DIPROPIONATE';
import * as OFLOXACIN16 from './data/External Preparations/OFLOXACIN    +  ORNIDAZOLE   +  TERBINAFINE HCL   +  CLOBETASOL PROPIONATE   +  METHYLPARABEN   +  PROPYLPARABEN';
import * as OFLOXACIN17 from './data/External Preparations/OFLOXACIN +  FLUOCINOLONE ACETONIDE   +  CLOTRIMAZOLE    +  CHLOROCRESOL';
import * as ACRIFLAVINE18 from './data/External Preparations/ACRIFLAVINE    +  THYMOL   +  CETRIMIDE';
import * as CLOBETASOL19 from './data/External Preparations/CLOBETASOL PROPIONATE    +  SALICYLIC ACID';
import * as BECLOMETHASONE20 from './data/External Preparations/BECLOMETHASONE DIPROPIONATE   +  KETOCONAZOLE';
import * as PAPAIN21 from './data/External Preparations/PAPAIN    +  UREA';
import * as SODIUM22 from './data/External Preparations/SODIUM HYALURONATE';
import * as HYDROQUINONE23 from './data/External Preparations/HYDROQUINONE+  TERTINOIN +  MOMETASONE FUROATE';
import * as HYDROQUINONE24 from './data/External Preparations/HYDROQUINONE+  TERTINOIN + FLUOCINOLONE';
import * as LIGNOCAINE25 from './data/External Preparations/LIGNOCAINE HCL GEL';
import * as KETOCONAZOLE from './data/External Preparations/KETOCONAZOLE';
import * as PERMETHRIN26 from './data/External Preparations/PERMETHRIN LOTION';
import * as GAMABENZENE27 from './data/External Preparations/GAMABENZENE LOTION';
import * as DICLOFENAC28 from './data/External Preparations/DICLOFENAC DIETHYLAMINE   +  METHYL SALICYLATE    +  MENTHOL   +  LINSEED OIL    +  BENZYL ALCOHOL';
import * as DISODIUM0 from './data/Miscellaneous Products/DISODIUM HYDROGEN CITRATE';
import * as CHLORHEXIDINE1 from './data/Miscellaneous Products/CHLORHEXIDINE GLUCONATE';
import * as GLYCERIN from './data/Miscellaneous Products/GLYCERIN';
import * as SUCRALFATE2 from './data/Miscellaneous Products/SUCRALFATE  +  OXETACAINE';
import * as MILK3 from './data/Miscellaneous Products/MILK OF MAGNESIA    +  LIQUID PARAFFIN';
import * as SUCRALFATE from './data/Miscellaneous Products/SUCRALFATE';
import * as SODIUM4 from './data/Miscellaneous Products/SODIUM PICOSULFATE';
import * as DICLOFENAC5 from './data/Miscellaneous Products/DICLOFENAC DIETHYLAMINE   +  METHYL SALICYLATE    +   MENTHOL +  LINSEED OIL  +  BENZYL ALCOHOL';
import * as CHOLECALCIFEROL6 from './data/Miscellaneous Products/CHOLECALCIFEROL(VITAMIN D3) SHOTS';



const info = {
    // 'multivitaminOralSpray': multiVitaminOralSpray,
    // 'ironOralSpray': ironOralSpray,
    // "AZITHROMYCIN": AZITHROMYCIN,
    "OFLOXACIN": OFLOXACIN,
    "OFLOXACIN0": OFLOXACIN0,
    // "OFLOXACIN1": OFLOXACIN1,
    "ROXITHROMYCIN": ROXITHROMYCIN,
    "OFLOXACIN2": OFLOXACIN2,
    "OFLOXACIN3": OFLOXACIN3,
    "PCM4": PCM4,
    "CPM5": CPM5,
    "CETIRIZINE6": CETIRIZINE6,
    "CETIRIZINE7": CETIRIZINE7,
    "LEVOCETIRIZINE8": LEVOCETIRIZINE8,
    "DICYCLOMINE9": DICYCLOMINE9,
    "FEXOFENADINE10": FEXOFENADINE10,
    "DEXTROMETHORPHAN11": DEXTROMETHORPHAN11,
    "DEFLAZACORT": DEFLAZACORT,
    "PROMETHAZINE12": PROMETHAZINE12,
    "PCM13": PCM13,
    "MEGALDRATE14": MEGALDRATE14,
    "OXETACAINE15": OXETACAINE15,
    "ACTIVATED16": ACTIVATED16,
    "AMOXYCILLIN": AMOXYCILLIN,
    "CEFIXIME": CEFIXIME,
    "CEFPODOXIME": CEFPODOXIME,
    "CEFIXIME0": CEFIXIME0,
    "IRON-HYDROXIDE1": IRONHYDROXIDE1,
    "FERRIC2": FERRIC2,
    "MULTIFORMULA3": MULTIFORMULA3,
    "FERROUS4": FERROUS4,
    "FERRIC5": FERRIC5,
    "IRON6": IRON6,
    "ENZYME7": ENZYME7,
    "CALCIUM8": CALCIUM8,
    "CALCIUM9": CALCIUM9,
    "FERRIC10": FERRIC10,
    "FERRIC11": FERRIC11,
    "PYRIDOXINE12": PYRIDOXINE12,
    "LYCOPENE13": LYCOPENE13,
    // "ALPHA14": ALPHA14,
    "L-LYSINE15": LYSINE15,
    "CYPROHEPTADINE16": CYPROHEPTADINE16,
    "TRICHOLINE17": TRICHOLINE17,
    "FERROUS18": FERROUS18,
    "PROTEIN19": PROTEIN19,
    "DOMPERIDONE": DOMPERIDONE,
    "ONDANSETRON": ONDANSETRON,
    "DIPHENHYDRAMINE20": DIPHENHYDRAMINE20,
    "TERBUTALINE21": TERBUTALINE21,
    "TERBUTALINE22": TERBUTALINE22,
    "DIPHENHYDRAMINE23": DIPHENHYDRAMINE23,
    "DEXTROMETHORPHAN24": DEXTROMETHORPHAN24,
    "DEXTROMETHORPHAN25": DEXTROMETHORPHAN25,
    "DEXTROMETHORPHAN26": DEXTROMETHORPHAN26,
    "CETIRIZINE27": CETIRIZINE27,
    "AMBROXOL28": AMBROXOL28,
    "CPM29": CPM29,
    "DEXTROMETHORPHEN30": DEXTROMETHORPHEN30,
    "DEXTROMETHORPHAN31": DEXTROMETHORPHAN31,
    "AMBROXOL32": AMBROXOL32,
    "DMR33": DMR33,
    "SODIUM0": SODIUM0,
    "XYLOMETAZOLINE1": XYLOMETAZOLINE1,
    "POTASSIUM2": POTASSIUM2,
    "POTASSIUM3": POTASSIUM3,
    "DICLOFENAC4": DICLOFENAC4,
    "ADAPALENE5": ADAPALENE5,
    "CLINDAMYCIN6": CLINDAMYCIN6,
    "MOMETASONE7": MOMETASONE7,
    "DICLOFENAC8": DICLOFENAC8,
    "CLOBETASOL9": CLOBETASOL9,
    "FLUTICASONE10": FLUTICASONE10,
    "FLUTICASONE11": FLUTICASONE11,
    "UREA12": UREA12,
    "BECLOMETHASONE13": BECLOMETHASONE13,
    "BECLOMETHASONE14": BECLOMETHASONE14,
    "CLOTRIMAZOLE15": CLOTRIMAZOLE15,
    "OFLOXACIN16": OFLOXACIN16,
    "OFLOXACIN17": OFLOXACIN17,
    "ACRIFLAVINE18": ACRIFLAVINE18,
    "CLOBETASOL19": CLOBETASOL19,
    "BECLOMETHASONE20": BECLOMETHASONE20,
    "PAPAIN21": PAPAIN21,
    "SODIUM22": SODIUM22,
    "HYDROQUINONE23": HYDROQUINONE23,
    "HYDROQUINONE24": HYDROQUINONE24,
    "LIGNOCAINE25": LIGNOCAINE25,
    "KETOCONAZOLE": KETOCONAZOLE,
    "PERMETHRIN26": PERMETHRIN26,
    "GAMABENZENE27": GAMABENZENE27,
    "DICLOFENAC28": DICLOFENAC28,
    "DISODIUM0": DISODIUM0,
    "CHLORHEXIDINE1": CHLORHEXIDINE1,
    "GLYCERIN": GLYCERIN,
    "SUCRALFATE2": SUCRALFATE2,
    "MILK3": MILK3,
    "SUCRALFATE": SUCRALFATE,
    "SODIUM4": SODIUM4,
    "DICLOFENAC5": DICLOFENAC5,
    "CHOLECALCIFEROL(VITAMIN6": CHOLECALCIFEROL6




}

export default info;