import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";
import jsPDF from "jspdf";
import "jspdf-autotable";

const VolunteerSubmissions = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from Supabase
  const fetchVolunteers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("lunest-volunteers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert("❌ Error fetching submissions: " + error.message);
    } else {
      setVolunteers(data);
      setFilteredVolunteers(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  // Filter results based on search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = volunteers.filter(
      (v) =>
        v.full_name?.toLowerCase().includes(value) ||
        v.email?.toLowerCase().includes(value) ||
        v.role_interest?.toLowerCase().includes(value)
    );
    setFilteredVolunteers(filtered);
  };

  // Toggle expanded state for long text
  const toggleExpand = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Download all or filtered data as PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("LUNEST Volunteer Submissions", 14, 20);

    const tableColumn = [
      "Full Name",
      "Email",
      "Phone",
      "Role Interest",
      "Experience",
      "CV URL",
    ];

    // ✅ Always include full experience text in PDF
    const tableRows = filteredVolunteers.map((v) => [
      v.full_name || "",
      v.email || "",
      v.phone || "",
      v.role_interest?.replaceAll("_", " ") || "",
      v.experience || "",
      v.cv_url ? v.cv_url : "No CV",
    ]);

    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 9, cellPadding: 3, valign: "top" },
      headStyles: { fillColor: [54, 79, 199] },
      columnStyles: { 4: { cellWidth: 60 } }, // Wider Experience column
    });

    doc.save("LUNEST_Volunteer_Submissions.pdf");
  };

  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-white px-4 md:px-10 lg:px-20 py-16">
        <h1 className="text-3xl font-semibold text-center mb-10 font-aeonik">
          Volunteer Submissions
        </h1>

        {/* Top controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name, email, or role..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full sm:w-[60%] h-12 px-5 rounded-full outline outline-1 outline-blue-700 bg-neutral-100 text-gray-700"
          />
          <button
            onClick={handleDownloadPDF}
            disabled={filteredVolunteers.length === 0}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-full"
          >
            Download as PDF
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-center text-gray-600">Loading submissions...</p>
        ) : filteredVolunteers.length === 0 ? (
          <p className="text-center text-gray-600">No submissions found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow text-sm">
              <thead>
                <tr className="bg-blue-700 text-white text-left">
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Role Interest</th>
                  <th className="px-4 py-3">Experience</th>
                  <th className="px-4 py-3">CV</th>
                </tr>
              </thead>
              <tbody>
                {filteredVolunteers.map((v) => (
                  <tr
                    key={v.id}
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">{v.full_name}</td>
                    <td className="px-4 py-3">{v.email}</td>
                    <td className="px-4 py-3">{v.phone}</td>
                    <td className="px-4 py-3 capitalize">
                      {v.role_interest?.replaceAll("_", " ")}
                    </td>
                    <td className="px-4 py-3 text-sm max-w-md whitespace-normal break-words">
                      {expandedRows[v.id] ? (
                        <>
                          {v.experience}
                          <button
                            onClick={() => toggleExpand(v.id)}
                            className="text-blue-600 ml-2 underline hover:text-blue-800"
                          >
                            Read less
                          </button>
                        </>
                      ) : (
                        <>
                          {v.experience?.length > 120
                            ? `${v.experience.substring(0, 120)}...`
                            : v.experience}
                          {v.experience?.length > 120 && (
                            <button
                              onClick={() => toggleExpand(v.id)}
                              className="text-blue-600 ml-2 underline hover:text-blue-800"
                            >
                              Read more
                            </button>
                          )}
                        </>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {v.cv_url ? (
                        <a
                          href={v.cv_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View CV
                        </a>
                      ) : (
                        <span className="text-gray-400 italic">No CV</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default VolunteerSubmissions;
