$(document).ready(function () {

   const distributionPoints = [
    { area: "شمال غزة", loc: "مدرسة الفاخورة", type: "طرود غذائية", status: "نشط" },
    { area: "مدينة غزة", loc: "ساحة السرايا", type: "تأمين مياه", status: "نشط" },
    { area: "خانيونس", loc: "مجمع ناصر الطبي", type: "أدوية طوارئ", status: "مزدحم" },
    { area: "دير البلح", loc: "مركز إيواء الهلال", type: "وجبات ساخنة", status: "نشط" },
    { area: "رفح", loc: "منطقة تل السلطان", type: "خيام إيواء", status: "نشط" },
    { area: "المنطقة الوسطى", loc: "دير البلح - مركز البركة", type: "توزيع دقيق", status: "نشط" }
];

    const tableBody = $('#distribution-body');

    distributionPoints.forEach(point => {
        const statusClass = point.status === 'نشط' ? 'bg-success' : 'bg-warning text-dark';

        const row = `
            <tr style="display:none;">
                <td class="fw-bold">${point.area}</td>
                <td>${point.loc}</td>
                <td><i class="fas fa-info-circle text-success me-1"></i> ${point.type}</td>
                <td><span class="badge ${statusClass}">${point.status}</span></td>
                <td><button class="btn btn-outline-dark btn-sm rounded-pill px-3">تتبع الموقع</button></td>
            </tr>
        `;
        tableBody.append(row);
    });

    $('#distribution-body tr').fadeIn(800);

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        $(this).fadeOut(400, function () {
            $('#formFeedback')
                .addClass('alert alert-success shadow-sm')
                .html(`
                    <h5 class="mb-0 fw-bold"><i class="fas fa-check-circle"></i> تم إرسال طلبك بنجاح!</h5>
                    <p class="mb-0 small">شكراً لك يا إبراهيم، فريقنا سيتواصل معك خلال 24 ساعة.</p>
                `);
        });
    });

});





