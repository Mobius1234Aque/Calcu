import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data.js";
import { Affix } from "antd";

function StudentPopulationCalculator() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(data);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Affix>
        <div className="bg-blue_uno text-white p-4 flex w-full">
          <Link to={"/"}>
            <p
              href="calculadora.html"
              className="hover:bg-green-700 px-4 py-2 rounded"
            >
              {" "}
              Tabla de datos
            </p>
          </Link>
          <Link to={"/CalculadoraParteDos"}>
            <p
              href="calculadora.html"
              className="hover:bg-green-700 px-4 py-2 rounded"
            >
              {" "}
              Calculadora
            </p>
          </Link>
        </div>
      </Affix>
      <div className="container mx-auto flex flex-col items-center h-screen">
        {/* Card container */}
        <div className="card bg-white  shadow-2xl mt-10 p-4 flex flex-col items-center">
          {/* Card header */}
          <h1 className="text-2xl font-semibold text-center mb-10 ">
            Tabla de la de Población Estudiantil en los ultimos años
          </h1>

          {/* Table container */}
          <div className="table-container flex-grow rounded-xl">
            {tableData.length > 0 && (
              <table className="table-auto w-full border border-collapse ">
                {/* Table header row */}
                <thead>
                  <tr className="bg-enviesss text-white text-left">
                    {Object.keys(tableData[0]).map((header) => (
                      <th
                        key={header}
                        className="px-4 py-2"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table body */}
                <tbody>
                  {tableData.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-gray-300 cursor-pointer"
                          : " bg-gray-400 border border-black cursor-pointer"
                      }
                    >
                      {Object.keys(item).map((header) => (
                        <td
                          key={`${item}-${header}`}
                          className="px-4 py-2"
                        >
                          {item[header]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {tableData.length === 0 && (
              <p className="text-center text-gray-500">
                No hay datos disponibles.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentPopulationCalculator;
