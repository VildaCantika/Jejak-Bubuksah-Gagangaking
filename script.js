let storyNumber = 1;

function nextStory() {

    const card = document.querySelector(".story-card");

    if (storyNumber === 1) {

        card.innerHTML = `
            <h3>Scene 02 — Perbedaan Jalan</h3>

            <p>
                Bubuksah dan Gagangaking menjalani
                kehidupan dengan cara yang berbeda.
                Perbedaan tersebut menjadi bagian
                penting dalam perkembangan kisah mereka.
            </p>

            <button onclick="nextStory()">
                LANJUTKAN →
            </button>
        `;

        storyNumber = 2;

    }

    else if (storyNumber === 2) {

        card.innerHTML = `
            <h3>Scene 03 — Ujian</h3>

            <p>
                Dalam kisah tersebut, muncul sebuah
                ujian yang menjadi bagian penting
                dalam perjalanan Bubuksah.
            </p>

            <button onclick="nextStory()">
                LANJUTKAN →
            </button>
        `;

        storyNumber = 3;

    }

    else {

        card.innerHTML = `
            <h3>Scene 04 — Makna Kisah</h3>

            <p>
                Kisah Bubuksah dan Gagangaking tidak
                hanya menarik sebagai cerita, tetapi
                juga memberikan gambaran mengenai
                nilai kehidupan dan spiritualitas
                dalam kebudayaan masa lalu.
            </p>

            <button onclick="nextStory()">
                SELESAI ✓
            </button>
        `;

    }

}


/* QUIZ */

function startQuiz() {

    const area = document.getElementById("quiz-area");

    area.innerHTML = `

        <div class="story-card">

            <h3>
                Di manakah Candi Gambar Wetan berada?
            </h3>

            <br>

            <button onclick="answer(false)">
                A. Surabaya
            </button>

            <button onclick="answer(false)">
                B. Malang
            </button>

            <button onclick="answer(true)">
                C. Blitar
            </button>

            <button onclick="answer(false)">
                D. Kediri
            </button>

            <div id="result"></div>

        </div>

    `;

}


function answer(correct) {

    const result = document.getElementById("result");

    if (correct) {

        result.innerHTML = `
            <br>
            <h3>✅ Jawaban benar!</h3>
            <p>Candi Gambar Wetan berada di wilayah Blitar.</p>
        `;

    }

    else {

        result.innerHTML = `
            <br>
            <h3>❌ Jawaban belum tepat.</h3>
            <p>Coba perhatikan kembali materi sebelumnya.</p>
        `;

    }

}