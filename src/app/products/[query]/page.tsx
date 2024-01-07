"use client"
import React, { use, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import DisplayList from "@/components/Pagination/DisplayList";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import items from "@/product_details/names";


function queryResponse({ params }) {

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(params.query.toLowerCase())
  );

  //////////////
  const subCategoryList = [
    'Anitbiotic', 'Anticold', 'Analgesic & Anti-Inflammatory', 'Antacid',
    'Dry Syrup', 'Tonic Syrup', 'Drops', 'Cough Syrup',
    'Asal Sprays', 'Intments', 'Shampoo', 'Lotions', 'Roll On'
  ]

  const categories = {
    'Suspensions': ['Anitbiotic', 'Anticold', 'Analgesic & Anti-Inflammatory', 'Antacid'],
    'Syrups': ['Dry Syrup', 'Tonic Syrup', 'Drops', 'Cough Syrup'],
    'External Preparations': ['Asal Sprays', 'Intments', 'Shampoo', 'Lotions', 'Roll On'],
    'Miscellaneous': [],
    'Tablets': [],
    'Capsules': [],
    'Sachets': []
  }

  //////////////

  const [list, setList] = useState(filtered)
  const [sublist, setSublist] = useState([])
  const inputMainRef = useRef(null)
  const inputSubRef = useRef(null)
  const [mainCategory, setMainCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [subCateOptions, setSubCateOptions] = useState(subCategoryList)

  ///////////

  const handleSelectionMain = (e, value) => {
    value ? setMainCategory(value) : setMainCategory("")
    inputMainRef.current ? inputMainRef.current.blur() : null
  }

  const handleSelectionSub = (e, value) => {
    value ? setSubCategory(value) : setSubCategory("")
    inputSubRef.current ? inputSubRef.current.blur() : null
  }


  ///////////////

  const handleChangedMain = useCallback(() => {
    if (mainCategory !== "") {
      const new_list = filtered.filter((item) =>
        item['mainCategory'].toLowerCase() === mainCategory.toLowerCase()
      )
      setSubCateOptions(categories[mainCategory])
      setList(new_list)
    } else {
      setSubCateOptions(subCategoryList)
      setList(filtered)
    }
    setSubCategory("")
  }, [mainCategory, setMainCategory])

  useEffect(
    handleChangedMain, [mainCategory, setMainCategory]
  )

  //////////////

  const handleChangedSub = useCallback(() => {
    if (subCategory !== "") {
      const new_list = list.filter((item) =>
        item['subCategory'] === subCategory
      )
      setSublist(new_list)
    }
  }, [subCategory, setSubCategory])

  useEffect(
    handleChangedSub, [subCategory, setSubCategory]
  )


  return (
    <>
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Object.keys(categories)}
          sx={{ width: 200 }}

          renderInput={(params) => <TextField {...params} label="Main Category"
            inputRef={inputMainRef}
          />}

          onChange={handleSelectionMain}
          value={mainCategory === "" ? null : mainCategory}

        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={subCateOptions}
          sx={{ width: 200 }}

          renderInput={(params) => <TextField {...params} label="Sub Category"
            inputRef={inputSubRef}
          />}

          onChange={handleSelectionSub}
          value={subCategory === "" ? null : subCategory}

        />
      </div>

      <DisplayList list={subCategory===""?list:sublist} />
    </>
  );
}

export default queryResponse;