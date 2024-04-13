import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Affix } from "antd";
import { Line } from "react-chartjs-2";

function Calcu() {
  const [showAlumnosIngresaran, setShowAlumnosIngresaran] = useState(false);
  const [showAlumnosDesertaran, setShowAlumnosDesertaran] = useState(false);

  const handleAlumnosIngresaranClick = () => {
    setShowAlumnosIngresaran(true);
    setShowAlumnosDesertaran(false);
  };

  const handleAlumnosDesertaranClick = () => {
    setShowAlumnosIngresaran(false);
    setShowAlumnosDesertaran(true);
  };

  // Definir los datos de la gráfica
  const addRow = () => {
    const newRow = { id: tableData.length + 1, name: "", age: "" };
    setTableData([...tableData, newRow]);
  };

  const [tableData, setTableData] = useState([]);

  // Función para agregar una nueva fila a la tabla

  useEffect(() => {
    // Se muestra una fila automáticamente al cargar la página
    addRow();
  }, []);

  // Función para manejar cambios en el input de edad
  // Función para manejar cambios en el input de edad
  const handleAgeChange = (event, id) => {
    const value = event.target.value; // Obtener el valor del input correctamente
    let age;

    // Verificar si el valor ingresado coincide con el valor específico
    if (value === "2001") {
      age = 132;
    } else if (value === "2002") {
      // También debes asegurarte de comparar con cadenas para todos los valores
      age = 146;
    } else if (value === "2003") {
      age = 156;
    } else if (value === "2004") {
      age = 162;
    } else if (value === "2005") {
      age = 172;
    } else if (value === "2006") {
      age = 178;
    } else if (value === "2007") {
      age = 197;
    } else if (value === "2008") {
      age = 201;
    } else if (value === "2009") {
      age = 211;
    } else if (value === "2010") {
      age = 221;
    } else if (value === "2011") {
      age = 241;
    } else if (value === "2012") {
      age = 256;
    } else if (value === "2013") {
      age = 271;
    } else if (value === "2014") {
      age = 287;
    } else if (value === "2015") {
      age = 291;
    } else if (value === "2016") {
      age = 304;
    } else if (value === "2017") {
      age = 317;
    } else if (value === "2018") {
      age = 341;
    } else if (value === "2019") {
      age = 367;
    } else if (value === "2020") {
      age = 378;
    } else if (value === "2021") {
      age = 389;
    } else if (value === "2022") {
      age = 399;
    } else {
      // Calcular la edad utilizando la fórmula existente
      age = Math.round(132 * Math.exp(0.05303 * (parseInt(value) - 2002)));
    }

    // Actualizar los datos de la tabla
    const updatedData = tableData.map((row) =>
      row.id === id
        ? {
            ...row,
            name: value,
            age: age,
          }
        : row
    );
    setTableData(updatedData);
  };

  const [tableDataDos, setTableDataDos] = useState([]);
  const addRowDos = () => {
    const newRow = { id: tableDataDos.length + 1, name: "", age: "" };
    setTableDataDos([...tableDataDos, newRow]);
  };

  useEffect(() => {
    // Se muestra una fila automáticamente al cargar la página
    addRowDos();
  }, []);

  // Función para manejar cambios en el input de nombre
  const handleNameChangeDos = (event, id) => {
    const updatedData = tableDataDos.map((row) =>
      row.id === id ? { ...row, name: event.target.value } : row
    );
    setTableDataDos(updatedData);
  };

  // Función para manejar cambios en el input de edad
  const handleAgeChangeDos = (event, id) => {
    const { value } = event.target;
    let age;

    // Verificar si el valor ingresado coincide con el valor específico
    if (value === "2001") {
      age = 27;
    } else if (value === "2002") {
      age = 16;
    } else if (value === "2003") {
      age = 25;
    } else if (value === "2004") {
      age = 21;
    } else if (value === "2005") {
      age = 21;
    } else if (value === "2006") {
      age = 19;
    } else if (value === "2007") {
      age = 12;
    } else if (value === "2008") {
      age = 16;
    } else if (value === "2009") {
      age = 13;
    } else if (value === "2010") {
      age = 21;
    } else if (value === "2011") {
      age = 25;
    } else if (value === "2012") {
      age = 30;
    } else if (value === "2013") {
      age = 25;
    } else if (value === "2014") {
      age = 28;
    } else if (value === "2015") {
      age = 13;
    } else if (value === "2016") {
      age = 15;
    } else if (value === "2017") {
      age = 26;
    } else if (value === "2018") {
      age = 26;
    } else if (value === "2019") {
      age = 27;
    } else if (value === "2020") {
      age = 39;
    } else if (value === "2021") {
      age = 27;
    } else if (value === "2022") {
      age = 21;
    } else {
      // Calcular la edad utilizando la fórmula existente
      age = Math.round(17 * Math.exp(-0.01196 * (parseInt(value) - 2002)));
    }

    // Actualizar los datos de la tabla
    const updatedData = tableDataDos.map((row) =>
      row.id === id
        ? {
            ...row,
            name: value,
            age: age,
          }
        : row
    );
    setTableDataDos(updatedData);
  };
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
      <div className="container mx-auto flex flex-col  mt-8 h-screen">
        <h1 className="text-2xl font-semibold mb-8">
          Selecciona una opción para realizar la prediccion:
        </h1>
        <div className="flex flex-row gap-4">
          <button
            onClick={handleAlumnosIngresaranClick}
            className="bg-blue_uno p-5 py-2 text-white rounded-lg"
          >
            Alumnos que ingresarán
          </button>
          <button
            onClick={handleAlumnosDesertaranClick}
            className="bg-blue_uno p-5 py-2 text-white rounded-lg"
          >
            Alumnos que desertarán
          </button>
        </div>

        {showAlumnosIngresaran && (
          <>
            <table className="table-auto w-full border border-collapse mt-6 ">
              {/* Aquí coloca la tabla de alumnos que ingresarán */}
              <thead className="bg-enviesss text-white">
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2">Ciclo</th>
                  <th className="px-4 py-2">Alumnos que Ingresaran</th>
                  {/* Agrega más columnas según sea necesario */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="px-4 py-2">CI</th>
                  <th className="px-4 py-2">2001 - 2002</th>
                  <th className="px-4 py-2">132</th>
                  {/* Agrega más columnas según sea necesario */}
                </tr>{" "}
                <tr>
                  <th className="px-4 py-2">K</th>
                  <th className="px-4 py-2">2023 - 2024</th>
                  <th className="px-4 py-2">402</th>
                  {/* Agrega más columnas según sea necesario */}
                </tr>{" "}
                <tr>
                  <th className="px-4 py-2"> ? </th>
                  <th className="px-4 py-2">Decision del Docente</th>
                  <th className="px-4 py-2">?</th>
                  {/* Agrega más columnas según sea necesario */}
                </tr>{" "}
              </tbody>
            </table>
            <div className="flex flex-row ">
              <div className="container mx-auto mt-8">
                <table className="table-auto w-full border border-collapse">
                  <thead className="bg-enviesss text-white">
                    <tr>
                      <th className="px-4 py-2"></th>
                      <th className="px-4 py-2">Ciclo</th>
                      <th className="px-4 py-2">Alumnos futuros</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.id}>
                        <td className="px-4 py-2">{row.id}</td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={row.name}
                            className="w-full px-2 text-lg py-2 bg-gray-300 text-center"
                            onChange={(event) => handleAgeChange(event, row.id)}
                          />
                        </td>
                        <td className="">
                          <input
                            type="text"
                            className="w-full px-2 py-2 text-lg  bg-gray-300 text-center"
                            value={row.age}
                            readOnly
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  className="bg-blue_uno hover:bg-gray-900 text-white font-bold py-2 px-8 mt-4 rounded-lg"
                  onClick={addRow}
                >
                  Agregar Fila
                </button>
              </div>
              <div className="basis-2/3 flex mt-8 items-center flex-col">
                {" "}
                <p className="text-lg font-bold">Formula usada </p>
                <p>dx / dt = k * x</p>
                <strong className="m-3">Solucion general</strong>
                <p className="m-1">x = C * e^(k)t</p>
              </div>
            </div>
          </>
        )}

        {showAlumnosDesertaran && (
          <>
            <table className="table-auto w-full border border-black mt-6">
              {/* Aquí coloca la tabla de alumnos que desertarán */}
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2">Ciclo</th>
                  <th className="px-4 py-2">Alumnos que desertaran </th>
                  {/* Agrega más columnas según sea necesario */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="px-4 py-2">CI</th>
                  <th className="px-4 py-2">2001 - 2002</th>
                  <th className="px-4 py-2">27</th>
                  {/* Agrega más columnas según sea necesario */}
                </tr>{" "}
                <tr>
                  <th className="px-4 py-2">K</th>
                  <th className="px-4 py-2">2022 - 2023</th>
                  <th className="px-4 py-2">21</th>
                  {/* Agrega más columnas según sea necesario */}
                </tr>{" "}
                <tr>
                  <th className="px-4 py-2"> ? </th>
                  <th className="px-4 py-2">Decision del Docente</th>
                  <th className="px-4 py-2">?</th>
                  {/* Agrega más columnas según sea necesario */}
                </tr>{" "}
              </tbody>
            </table>
            <div className="flex flex-row ">
              <div className="container mx-auto mt-8">
                <table className="table-auto w-full border border-collapse">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="px-4 py-2"></th>
                      <th className="px-4 py-2">Ciclo</th>
                      <th className="px-4 py-2">Alumnos futuros</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableDataDos.map((row) => (
                      <tr key={row.id}>
                        <td className="px-4 py-2">{row.id}</td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={row.name}
                            className="w-full px-2 text-lg py-2 bg-gray-300 text-center"
                            onChange={(event) =>
                              handleAgeChangeDos(event, row.id)
                            }
                          />
                        </td>
                        <td className="">
                          <input
                            type="text"
                            className="w-full px-2 py-2 text-lg  bg-gray-300 text-center"
                            value={row.age}
                            readOnly
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  className="bg-blue_uno hover:bg-gray-900 text-white font-bold py-2 px-8 mt-4 rounded-lg"
                  onClick={addRowDos}
                >
                  Agregar Fila
                </button>
              </div>
              <div className="basis-2/3 flex mt-8 items-center flex-col">
                {" "}
                <p className="text-lg font-bold">Formula usada </p>
                <p>dx / dt = k * x</p>
                <strong className="m-3">Solucion general</strong>
                <p className="m-1">x = C * e^(k)t</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Calcu;
