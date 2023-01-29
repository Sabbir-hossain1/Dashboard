(function(factory) {
    typeof define === 'function' && define.amd ? define(factory) : factory();
}
)((function() {
    'use strict';

    const {merge: merge} = window._;
    const echartSetOption = (e,t,o)=>{
        const a = document.body;
        e.setOption(merge(o(), t)),
        a.addEventListener("clickControl", (({detail: {control: a}})=>{
            "phoenixTheme" === a && e.setOption(window._.merge(o(), t));
        }
        ));
    };
    
    const resizeEcharts = ()=>{
        const e = document.querySelectorAll("[data-echart-responsive]");
        e.length > 0 && e.forEach((e=>{
            echarts.getInstanceByDom(e)?.resize();
        }
        ));
    };
    
    
    const navbarVerticalToggle = document.querySelector(".navbar-vertical-toggle");
    navbarVerticalToggle && navbarVerticalToggle.addEventListener("navbar.vertical.toggle", (e=>resizeEcharts()));
    const tooltipFormatter = (e,t="MMM DD")=>{
        let o = "";
        return e.forEach((e=>{
            o += `<div class='ms-1'>\n        <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${e.borderColor ? e.borderColor : e.color}"></span>\n          ${e.seriesName} : ${"object" == typeof e.value ? e.value[1] : e.value}\n        </h6>\n      </div>`;
        }
        )),
        `<div>\n            <p class='mb-2 text-600'>\n              ${window.dayjs(e[0].axisValue).isValid() ? window.dayjs(e[0].axisValue).format(t) : e[0].axisValue}\n            </p>\n            ${o}\n          </div>`
    }
    ;

    const newCustomersChartsInit = ()=>{
        const {getColor: t, getData: o, getDates: e, resize: a} = window.phoenix.utils
          , i = document.querySelector(".echarts-new-customers")
          , r = t=>{
            const o = window.dayjs(t[0].axisValue)
              , e = window.dayjs(t[0].axisValue).subtract(1, "month")
              , a = t.map(((t,a)=>({
                value: t.value,
                date: a > 0 ? e : o,
                color: t.color
            })));
            let i = "";
            return a.forEach(((t,o)=>{
                i += `<h6 class="fs--1 text-700 ${o > 0 && "mb-0"}"><span class="fas fa-circle me-2" style="color:${t.color}"></span>\n      ${t.date.format("MMM DD")} : ${t.value}\n    </h6>`;
            }
            )),
            `<div class='ms-1'>\n              ${i}\n            </div>`
        }
        ;
        if (i) {
            const s = o(i, "echarts")
              , n = window.echarts.init(i);
            echartSetOption(n, s, (()=>({
                tooltip: {
                    trigger: "axis",
                    padding: 10,
                    backgroundColor: t("gray-100"),
                    borderColor: t("gray-300"),
                    textStyle: {
                        color: t("dark")
                    },
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {
                        type: "none"
                    },
                    formatter: r
                },
                xAxis: [{
                    type: "category",
                    data: e(new Date("5/1/2022"), new Date("5/7/2022"), 864e5),
                    show: !0,
                    boundaryGap: !1,
                    axisLine: {
                        show: !0,
                        lineStyle: {
                            color: t("gray-200")
                        }
                    },
                    axisTick: {
                        show: !1
                    },
                    axisLabel: {
                        formatter: t=>window.dayjs(t).format("DD MMM"),
                        showMinLabel: !0,
                        showMaxLabel: !1,
                        color: t("gray-800"),
                        align: "left",
                        interval: 5,
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    }
                }, {
                    type: "category",
                    position: "bottom",
                    show: !0,
                    data: e(new Date("5/1/2022"), new Date("5/7/2022"), 864e5),
                    axisLabel: {
                        formatter: t=>window.dayjs(t).format("DD MMM"),
                        interval: 130,
                        showMaxLabel: !0,
                        showMinLabel: !1,
                        color: t("gray-800"),
                        align: "right",
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    },
                    axisLine: {
                        show: !1
                    },
                    axisTick: {
                        show: !1
                    },
                    splitLine: {
                        show: !1
                    },
                    boundaryGap: !1
                }],
                yAxis: {
                    show: !1,
                    type: "value",
                    boundaryGap: !1
                },
                series: [{
                    type: "line",
                    data: [150, 100, 300, 200, 250, 180, 250],
                    showSymbol: !1,
                    symbol: "circle",
                    lineStyle: {
                        width: 2,
                        color: t("gray-200")
                    },
                    emphasis: {
                        lineStyle: {
                            color: t("gray-200")
                        }
                    }
                }, {
                    type: "line",
                    data: [200, 150, 250, 100, 500, 400, 600],
                    lineStyle: {
                        width: 2,
                        color: t("primary")
                    },
                    showSymbol: !1,
                    symbol: "circle"
                }],
                grid: {
                    left: 0,
                    right: 0,
                    top: 5,
                    bottom: 20
                }
            }))),
            a((()=>{
                n.resize();
            }
            ));
        }
    }
    ;

    const projectionVsActualChartInit = ()=>{
        const {getColor: t, getData: e, getPastDates: o, resize: r} = window.phoenix.utils
          , a = document.querySelector(".echart-projection-actual")
          , i = o(10)
          , n = [44485, 20428, 47302, 45180, 31034, 46358, 26581, 36628, 38219, 43256]
          , l = [38911, 29452, 31894, 47876, 31302, 27731, 25490, 30355, 27176, 30393];
        if (a) {
            const o = e(a, "echarts")
              , c = echarts.init(a);
            echartSetOption(c, o, (()=>({
                color: [t("primary"), t("gray-300")],
                tooltip: {
                    trigger: "axis",
                    padding: [7, 10],
                    backgroundColor: t("gray-100"),
                    borderColor: t("gray-300"),
                    textStyle: {
                        color: t("dark")
                    },
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {
                        type: "none"
                    },
                    formatter: t=>tooltipFormatter(t)
                },
                legend: {
                    data: ["Projected revenue", "Actual revenue"],
                    right: "right",
                    width: "100%",
                    itemWidth: 16,
                    itemHeight: 8,
                    itemGap: 20,
                    top: 3,
                    inactiveColor: t("gray-500"),
                    textStyle: {
                        color: t("gray-900"),
                        fontWeight: 600,
                        fontFamily: "Nunito Sans"
                    }
                },
                xAxis: {
                    type: "category",
                    axisLabel: {
                        color: t("gray-800"),
                        formatter: t=>window.dayjs(t).format("MMM DD"),
                        interval: 3,
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    },
                    data: i,
                    axisLine: {
                        lineStyle: {
                            color: t("gray-300")
                        }
                    },
                    axisTick: !1
                },
                yAxis: {
                    axisPointer: {
                        type: "none"
                    },
                    axisTick: "none",
                    splitLine: {
                        interval: 5,
                        lineStyle: {
                            color: t("gray-200")
                        }
                    },
                    axisLine: {
                        show: !1
                    },
                    axisLabel: {
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8,
                        color: t("gray-800"),
                        margin: 20,
                        verticalAlign: "bottom",
                        formatter: t=>`$${t.toLocaleString()}`
                    }
                },
                series: [{
                    name: "Projected revenue",
                    type: "bar",
                    barWidth: "6px",
                    data: l,
                    barGap: "30%",
                    label: {
                        show: !1
                    },
                    itemStyle: {
                        borderRadius: [2, 2, 0, 0],
                        color: t("primary")
                    }
                }, {
                    name: "Actual revenue",
                    type: "bar",
                    data: n,
                    barWidth: "6px",
                    barGap: "30%",
                    label: {
                        show: !1
                    },
                    z: 10,
                    itemStyle: {
                        borderRadius: [2, 2, 0, 0],
                        color: t("info-100")
                    }
                }],
                grid: {
                    right: 0,
                    left: 3,
                    bottom: 0,
                    top: "15%",
                    containLabel: !0
                },
                animation: !1
            }))),
            r((()=>{
                c.resize();
            }
            ));
        }
    }
    ;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const leaftletPoints = [{
        lat: 25.659195,
        lng: 30.182691,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 26.659195,
        lng: 31.182691,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 53.958332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 53.958332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 52.958332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 51.958332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 53.958332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 54.958332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 55.958332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 53.908332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 53.008332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 53.158332,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 53.000032,
        lng: -1.080278,
        name: "Diana Meyer",
        street: "Slude Strand 27",
        location: "1130 Kobenhavn"
    }, {
        lat: 52.292001,
        lng: -2.22,
        name: "Anke Schroder",
        street: "Industrivej 54",
        location: "4140 Borup"
    }, {
        lat: 52.392001,
        lng: -2.22,
        name: "Anke Schroder",
        street: "Industrivej 54",
        location: "4140 Borup"
    }, {
        lat: 51.492001,
        lng: -2.22,
        name: "Anke Schroder",
        street: "Industrivej 54",
        location: "4140 Borup"
    }, {
        lat: 51.192001,
        lng: -2.22,
        name: "Anke Schroder",
        street: "Industrivej 54",
        location: "4140 Borup"
    }, {
        lat: 52.292001,
        lng: -2.22,
        name: "Anke Schroder",
        street: "Industrivej 54",
        location: "4140 Borup"
    }, {
        lat: 54.392001,
        lng: -2.22,
        name: "Anke Schroder",
        street: "Industrivej 54",
        location: "4140 Borup"
    }, {
        lat: 51.292001,
        lng: -2.22,
        name: "Anke Schroder",
        street: "Industrivej 54",
        location: "4140 Borup"
    }, {
        lat: 52.102001,
        lng: -2.22,
        name: "Anke Schroder",
        street: "Industrivej 54",
        location: "4140 Borup"
    }, {
        lat: 52.202001,
        lng: -2.22,
        name: "Anke Schroder",
        street: "Industrivej 54",
        location: "4140 Borup"
    }, {
        lat: 51.063202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.363202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.463202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.563202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.763202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.863202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.963202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.000202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.000202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.163202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 52.263202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 53.463202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 55.163202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 56.263202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 56.463202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 56.563202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 56.663202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 56.763202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 56.863202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 56.963202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 57.973202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 57.163202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.163202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.263202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.363202,
        lng: -1.308,
        name: "Tobias Vogel",
        street: "Mollebakken 33",
        location: "3650 Olstykke"
    }, {
        lat: 51.409,
        lng: -2.647,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.68,
        lng: -1.49,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 50.259998,
        lng: -5.051,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 54.906101,
        lng: -1.38113,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.383331,
        lng: -1.466667,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.483002,
        lng: -2.2931,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 51.509865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 51.109865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 51.209865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 51.309865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 51.409865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 51.609865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 51.709865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 51.809865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 51.909865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.109865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.209865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.309865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.409865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.509865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.609865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.709865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.809865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.909865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.519865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.529865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.539865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.549865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 52.549865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.109865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.209865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.319865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.329865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.409865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.559865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.619865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.629865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.639865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.649865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.669865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.669865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.719865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.739865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.749865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.759865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.769865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.769865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.819865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.829865,
        lng: -.118092,
        name: "Richard Hendricks",
        street: "37 Seafield Place",
        location: "London"
    }, {
        lat: 53.483959,
        lng: -2.244644,
        name: "Ethel B. Brooks",
        street: "2576 Sun Valley Road"
    }, {
        lat: 40.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 39.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 38.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 37.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 40.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 41.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 42.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 43.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 44.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 45.737,
        lng: -73.923,
        name: "Marshall D. Lewis",
        street: "1489 Michigan Avenue",
        location: "Michigan"
    }, {
        lat: 46.7128,
        lng: 74.006,
        name: "Elizabeth C. Lyons",
        street: "4553 Kenwood Place",
        location: "Fort Lauderdale"
    }, {
        lat: 40.7128,
        lng: 74.1181,
        name: "Elizabeth C. Lyons",
        street: "4553 Kenwood Place",
        location: "Fort Lauderdale"
    }, {
        lat: 14.235,
        lng: 51.9253,
        name: "Ralph D. Wylie",
        street: "3186 Levy Court",
        location: "North Reading"
    }, {
        lat: 15.235,
        lng: 51.9253,
        name: "Ralph D. Wylie",
        street: "3186 Levy Court",
        location: "North Reading"
    }, {
        lat: 16.235,
        lng: 51.9253,
        name: "Ralph D. Wylie",
        street: "3186 Levy Court",
        location: "North Reading"
    }, {
        lat: 14.235,
        lng: 51.9253,
        name: "Ralph D. Wylie",
        street: "3186 Levy Court",
        location: "North Reading"
    }, {
        lat: 15.8267,
        lng: 47.9218,
        name: "Hope A. Atkins",
        street: "3715 Hillcrest Drive",
        location: "Seattle"
    }, {
        lat: 15.9267,
        lng: 47.9218,
        name: "Hope A. Atkins",
        street: "3715 Hillcrest Drive",
        location: "Seattle"
    }, {
        lat: 23.4425,
        lng: 58.4438,
        name: "Samuel R. Bailey",
        street: "2883 Raoul Wallenberg Place",
        location: "Cheshire"
    }, {
        lat: 23.5425,
        lng: 58.3438,
        name: "Samuel R. Bailey",
        street: "2883 Raoul Wallenberg Place",
        location: "Cheshire"
    }, {
        lat: -37.8927369333,
        lng: 175.4087452333,
        name: "Samuel R. Bailey",
        street: "3228 Glory Road",
        location: "Nashville"
    }, {
        lat: -38.9064188833,
        lng: 175.4441556833,
        name: "Samuel R. Bailey",
        street: "3228 Glory Road",
        location: "Nashville"
    }, {
        lat: -12.409874,
        lng: -65.596832,
        name: "Ann J. Perdue",
        street: "921 Ella Street",
        location: "Dublin"
    }, {
        lat: -22.090887,
        lng: -57.411827,
        name: "Jorge C. Woods",
        street: "4800 North Bend River Road",
        location: "Allen"
    }, {
        lat: -19.019585,
        lng: -65.261963,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: -16.500093,
        lng: -68.214684,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: -17.413977,
        lng: -66.165321,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: -16.489689,
        lng: -68.119293,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: 54.766323,
        lng: 3.08603729,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: 54.866323,
        lng: 3.08603729,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: 49.537685,
        lng: 3.08603729,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: 54.715424,
        lng: .509207,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: 44.891666,
        lng: 10.136665,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: 48.078335,
        lng: 14.535004,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: -26.358055,
        lng: 27.398056,
        name: "Russ E. Panek",
        street: "4068 Hartland Avenue",
        location: "Appleton"
    }, {
        lat: -29.1,
        lng: 26.2167,
        name: "Wilbur J. Dry",
        street: "2043 Jadewood Drive",
        location: "Northbrook"
    }, {
        lat: -29.883333,
        lng: 31.049999,
        name: "Wilbur J. Dry",
        street: "2043 Jadewood Drive",
        location: "Northbrook"
    }, {
        lat: -26.266111,
        lng: 27.865833,
        name: "Wilbur J. Dry",
        street: "2043 Jadewood Drive",
        location: "Northbrook"
    }, {
        lat: -29.087217,
        lng: 26.154898,
        name: "Wilbur J. Dry",
        street: "2043 Jadewood Drive",
        location: "Northbrook"
    }, {
        lat: -33.958252,
        lng: 25.619022,
        name: "Wilbur J. Dry",
        street: "2043 Jadewood Drive",
        location: "Northbrook"
    }, {
        lat: -33.977074,
        lng: 22.457581,
        name: "Wilbur J. Dry",
        street: "2043 Jadewood Drive",
        location: "Northbrook"
    }, {
        lat: -26.563404,
        lng: 27.844164,
        name: "Wilbur J. Dry",
        street: "2043 Jadewood Drive",
        location: "Northbrook"
    }, {
        lat: 51.21389,
        lng: -102.462776,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 52.321945,
        lng: -106.584167,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 50.288055,
        lng: -107.793892,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 52.7575,
        lng: -108.28611,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 50.393333,
        lng: -105.551941,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 50.930557,
        lng: -102.807777,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 52.856388,
        lng: -104.610001,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 52.289722,
        lng: -106.666664,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 52.201942,
        lng: -105.123055,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 53.278046,
        lng: -110.00547,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 49.13673,
        lng: -102.990959,
        name: "Joseph B. Poole",
        street: "3364 Lunetta Street",
        location: "Wichita Falls"
    }, {
        lat: 45.484531,
        lng: -73.597023,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 45.266666,
        lng: -71.900002,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 45.349998,
        lng: -72.51667,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 47.333332,
        lng: -79.433334,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 45.400002,
        lng: -74.033333,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 45.683334,
        lng: -73.433334,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 48.099998,
        lng: -77.783333,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 45.5,
        lng: -72.316666,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 46.349998,
        lng: -72.550003,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 48.119999,
        lng: -69.18,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 45.599998,
        lng: -75.25,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 46.099998,
        lng: -71.300003,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 45.700001,
        lng: -73.633331,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 47.68,
        lng: -68.879997,
        name: "Claudette D. Nowakowski",
        street: "3742 Farland Avenue",
        location: "San Antonio"
    }, {
        lat: 46.716667,
        lng: -79.099998,
        name: "299"
    }, {
        lat: 45.016666,
        lng: -72.099998,
        name: "299"
    }];

    const {echarts: echarts$2} = window
      , returningCustomerChartInit = ()=>{
        const {getColor: t, getData: e, resize: o} = window.phoenix.utils
          , i = document.querySelector(".echart-returning-customer");
        if (i) {
            const r = e(i, "echarts")
              , a = echarts$2.init(i);
            echartSetOption(a, r, (()=>({
                color: t("gray-100"),
                legend: {
                    data: [{
                        name: "Fourth time",
                        icon: "roundRect",
                        itemStyle: {
                            color: t("primary-300"),
                            borderWidth: 0
                        }
                    }, {
                        name: "Third time",
                        icon: "roundRect",
                        itemStyle: {
                            color: t("info-200"),
                            borderWidth: 0
                        }
                    }, {
                        name: "Second time",
                        icon: "roundRect",
                        itemStyle: {
                            color: t("primary"),
                            borderWidth: 0
                        }
                    }],
                    right: "right",
                    width: "100%",
                    itemWidth: 16,
                    itemHeight: 8,
                    itemGap: 20,
                    top: 3,
                    inactiveColor: t("gray-500"),
                    inactiveBorderWidth: 0,
                    textStyle: {
                        color: t("gray-900"),
                        fontWeight: 600,
                        fontFamily: "Nunito Sans"
                    }
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "none"
                    },
                    padding: [7, 10],
                    backgroundColor: t("gray-100"),
                    borderColor: t("gray-300"),
                    textStyle: {
                        color: t("dark")
                    },
                    borderWidth: 1,
                    transitionDuration: 0,
                    formatter: tooltipFormatter
                },
                xAxis: {
                    type: "category",
                    data: months,
                    show: !0,
                    boundaryGap: !1,
                    axisLine: {
                        show: !0,
                        lineStyle: {
                            color: t("gray-300")
                        }
                    },
                    axisTick: {
                        show: !1
                    },
                    axisLabel: {
                        showMinLabel: !1,
                        showMaxLabel: !1,
                        color: t("gray-800"),
                        formatter: t=>t.slice(0, 3),
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    },
                    splitLine: {
                        show: !0,
                        lineStyle: {
                            color: t("gray-200"),
                            type: "dashed"
                        }
                    }
                },
                yAxis: {
                    type: "value",
                    boundaryGap: !1,
                    axisLabel: {
                        showMinLabel: !0,
                        showMaxLabel: !0,
                        color: t("gray-800"),
                        formatter: t=>`${t}%`,
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    },
                    splitLine: {
                        show: !0,
                        lineStyle: {
                            color: t("gray-200")
                        }
                    }
                },
                series: [{
                    name: "Fourth time",
                    type: "line",
                    data: [62, 90, 90, 90, 78, 84, 17, 17, 17, 17, 82, 95],
                    showSymbol: !1,
                    symbol: "circle",
                    symbolSize: 10,
                    emphasis: {
                        lineStyle: {
                            width: 1
                        }
                    },
                    lineStyle: {
                        type: "dashed",
                        width: 1,
                        color: t("primary-300")
                    },
                    itemStyle: {
                        borderColor: t("primary-300"),
                        borderWidth: 3
                    }
                }, {
                    name: "Third time",
                    type: "line",
                    data: [50, 50, 30, 62, 18, 70, 70, 22, 70, 70, 70, 70],
                    showSymbol: !1,
                    symbol: "circle",
                    symbolSize: 10,
                    emphasis: {
                        lineStyle: {
                            width: 1
                        }
                    },
                    lineStyle: {
                        width: 1,
                        color: t("info-200")
                    },
                    itemStyle: {
                        borderColor: t("info-200"),
                        borderWidth: 3
                    }
                }, {
                    name: "Second time",
                    type: "line",
                    data: [40, 78, 60, 78, 60, 20, 60, 40, 60, 40, 20, 78],
                    showSymbol: !1,
                    symbol: "circle",
                    symbolSize: 10,
                    emphasis: {
                        lineStyle: {
                            width: 3
                        }
                    },
                    lineStyle: {
                        width: 3,
                        color: t("primary")
                    },
                    itemStyle: {
                        borderColor: t("primary"),
                        borderWidth: 3
                    }
                }],
                grid: {
                    left: 0,
                    right: 8,
                    top: "14%",
                    bottom: 0,
                    containLabel: !0
                }
            }))),
            o((()=>{
                a.resize();
            }
            ));
        }
    }
    ;

    const {echarts: echarts$1} = window
      , topCouponsChartInit = ()=>{
        const {getData: e, getColor: t, resize: o} = window.phoenix.utils
          , r = document.querySelector(".echart-top-coupons");
        if (r) {
            const a = e(r, "options")
              , i = echarts$1.init(r);
            echartSetOption(i, a, (()=>({
                color: [t("primary"), t("primary-200"), t("info-500")],
                tooltip: {
                    trigger: "item",
                    padding: [7, 10],
                    backgroundColor: t("gray-100"),
                    borderColor: t("gray-300"),
                    textStyle: {
                        color: t("dark")
                    },
                    borderWidth: 1,
                    transitionDuration: 0,
                    formatter: e=>`<strong>${e.data.name}:</strong> ${e.percent}%`
                },
                legend: {
                    show: !1
                },
                series: [{
                    name: "72%",
                    type: "pie",
                    radius: ["100%", "87%"],
                    avoidLabelOverlap: !1,
                    emphasis: {
                        scale: !1,
                        itemStyle: {
                            color: "inherit"
                        }
                    },
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: t("white")
                    },
                    label: {
                        show: !0,
                        position: "center",
                        formatter: "{a}",
                        fontSize: 23,
                        color: t("dark")
                    },
                    data: [{
                        value: 72e5,
                        name: "Percentage discount"
                    }, {
                        value: 18e5,
                        name: "Fixed card discount"
                    }, {
                        value: 1e6,
                        name: "Fixed product discount"
                    }]
                }],
                grid: {
                    containLabel: !0
                }
            }))),
            o((()=>{
                i.resize();
            }
            ));
        }
    }
    ;

    const totalSalesChartInit = ()=>{
        const {getColor: t, getData: o, getDates: a, getItemFromStore: e, resize: i} = window.phoenix.utils
          , r = document.querySelector(".echart-total-sales-chart")
          , n = a(new Date("5/1/2022"), new Date("5/30/2022"), 864e5)
          , s = [100, 200, 300, 300, 300, 250, 200, 200, 200, 200, 200, 500, 500, 500, 600, 700, 800, 900, 1e3, 1100, 850, 600, 600, 600, 400, 200, 200, 300, 300, 300]
          , l = [200, 200, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 200, 400, 600, 600, 600, 800, 1e3, 700, 400, 450, 500, 600, 700, 650, 600, 550]
          , c = t=>{
            const o = window.dayjs(t[0].axisValue)
              , a = window.dayjs(t[0].axisValue).subtract(1, "month")
              , e = t.map(((t,e)=>({
                value: t.value,
                date: e > 0 ? a : o,
                color: t.color
            })));
            let i = "";
            return e.forEach(((t,o)=>{
                i += `<h6 class="fs--1 text-700 ${o > 0 && "mb-0"}"><span class="fas fa-circle me-2" style="color:${t.color}"></span>\n      ${t.date.format("MMM DD")} : ${t.value}\n    </h6>`;
            }
            )),
            `<div class='ms-1'>\n              ${i}\n            </div>`
        }
        ;
        if (r) {
            const a = o(r, "echarts")
              , h = window.echarts.init(r);
            echartSetOption(h, a, (()=>({
                color: [t("primary"), t("info")],
                tooltip: {
                    trigger: "axis",
                    padding: 10,
                    backgroundColor: t("gray-100"),
                    borderColor: t("gray-300"),
                    textStyle: {
                        color: t("dark")
                    },
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {
                        type: "none"
                    },
                    formatter: c
                },
                xAxis: [{
                    type: "category",
                    data: n,
                    axisLabel: {
                        formatter: t=>window.dayjs(t).format("DD MMM"),
                        interval: 13,
                        showMinLabel: !0,
                        showMaxLabel: !1,
                        color: t("gray-800"),
                        align: "left",
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    },
                    axisLine: {
                        show: !0,
                        lineStyle: {
                            color: t("gray-200")
                        }
                    },
                    axisTick: {
                        show: !1
                    },
                    splitLine: {
                        show: !0,
                        interval: 0,
                        lineStyle: {
                            color: "dark" === e("phoenixTheme") ? t("gray-100") : t("gray-200")
                        }
                    },
                    boundaryGap: !1
                }, {
                    type: "category",
                    position: "bottom",
                    data: n,
                    axisLabel: {
                        formatter: t=>window.dayjs(t).format("DD MMM"),
                        interval: 130,
                        showMaxLabel: !0,
                        showMinLabel: !1,
                        color: t("gray-800"),
                        align: "right",
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    },
                    axisLine: {
                        show: !1
                    },
                    axisTick: {
                        show: !1
                    },
                    splitLine: {
                        show: !1
                    },
                    boundaryGap: !1
                }],
                yAxis: {
                    position: "right",
                    axisPointer: {
                        type: "none"
                    },
                    axisTick: "none",
                    splitLine: {
                        show: !1
                    },
                    axisLine: {
                        show: !1
                    },
                    axisLabel: {
                        show: !1
                    }
                },
                series: [{
                    name: "d",
                    type: "line",
                    data: s,
                    showSymbol: !1,
                    symbol: "circle"
                }, {
                    name: "e",
                    type: "line",
                    data: l,
                    lineStyle: {
                        type: "dashed",
                        width: 1,
                        color: t("info")
                    },
                    showSymbol: !1,
                    symbol: "circle"
                }],
                grid: {
                    right: 2,
                    left: 5,
                    bottom: "20px",
                    top: "2%",
                    containLabel: !1
                },
                animation: !1
            }))),
            i((()=>{
                h.resize();
            }
            ));
        }
    }
    ;

    const chartJsInit = (t,e)=>{
        if (!t)
            return;
        const n = t.getContext("2d");
        if (n) {
            let t = new window.Chart(n,e());
            document.body.addEventListener("clickControl", (({detail: {control: o}})=>("phoenixTheme" === o && (t.destroy(),
            t = new window.Chart(n,e())),
            null)));
        }
    }
    ;

    const payingCustomerChartInit = ()=>{
        const {getColor: r} = window.phoenix.utils
          , t = document.getElementById("payingCustomerChart");
        if (t) {
            chartJsInit(t, (()=>({
                type: "doughnut",
                data: {
                    labels: ["Paying", "Non-paying"],
                    datasets: [{
                        data: [30, 70],
                        backgroundColor: [r("primary"), r("primary-100")],
                        borderColor: [r("primary"), r("primary-100")],
                        borderRadius: [{
                            outerStart: 15,
                            outerEnd: 0,
                            innerStart: 15,
                            innerEnd: 0
                        }, {
                            outerStart: 0,
                            outerEnd: 15,
                            innerStart: 0,
                            innerEnd: 15
                        }]
                    }]
                },
                options: {
                    tooltips: {
                        backgroundColor: r("primary-100"),
                        borderColor: r("primary-100"),
                        borderWidth: 1,
                        titleColor: r("black"),
                        position: "nearest",
                        callbacks: {
                            labelTextColor: ()=>r("black")
                        }
                    },
                    rotation: -90,
                    circumference: "180",
                    cutout: "80%",
                    plugins: {
                        legend: {
                            display: !1
                        }
                    }
                }
            })));
        }
    }
    ;

    const totalOrdersChartInit = ()=>{
        const {getColor: t, getData: r, getDates: o, resize: e} = window.phoenix.utils
          , a = document.querySelector(".echart-total-orders");
        if (a) {
            const i = r(a, "echarts")
              , s = window.echarts.init(a);
            echartSetOption(s, i, (()=>({
                color: t("primary"),
                tooltip: {
                    trigger: "item",
                    padding: [7, 10],
                    backgroundColor: t("gray-100"),
                    borderColor: t("gray-300"),
                    textStyle: {
                        color: t("dark")
                    },
                    borderWidth: 1,
                    transitionDuration: 0,
                    formatter: t=>(console.log({
                        params: t
                    }),
                    `<strong>${window.dayjs(t.name).format("DD MMM")}:</strong> ${t.value}`)
                },
                xAxis: {
                    type: "category",
                    data: o(new Date("5/1/2022"), new Date("5/7/2022"), 864e5),
                    show: !0,
                    boundaryGap: !1,
                    axisLine: {
                        show: !0,
                        lineStyle: {
                            color: t("gray-200")
                        }
                    },
                    axisTick: {
                        show: !1
                    },
                    axisLabel: {
                        formatter: t=>window.dayjs(t).format("DD MMM"),
                        interval: 6,
                        showMinLabel: !0,
                        showMaxLabel: !0,
                        color: t("gray-800")
                    }
                },
                yAxis: {
                    show: !1,
                    type: "value",
                    boundaryGap: !1
                },
                series: [{
                    type: "bar",
                    barWidth: "5px",
                    data: [120, 200, 150, 80, 70, 110, 120],
                    showBackground: !0,
                    symbol: "none",
                    itemStyle: {
                        borderRadius: 10
                    },
                    backgroundStyle: {
                        borderRadius: 10,
                        color: t("primary-100")
                    }
                }],
                grid: {
                    right: 10,
                    left: 10,
                    bottom: 0,
                    top: 0
                }
            }))),
            e((()=>{
                s.resize();
            }
            ));
        }
    }
    ;

    const revenueMapInit = ()=>{
        const e = document.body
          , t = document.querySelectorAll(".revenue-map");
        if (t.length && window.google) {
            const i = {
                SnazzyCustomLight: [{
                    featureType: "administrative",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#525b75"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.country",
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "administrative.province",
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#E3E6ED"
                    }]
                }, {
                    featureType: "landscape.natural",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{
                        color: "#eff2f6"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.line",
                    elementType: "labels.text",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.station.airport",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.station.airport",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#F5F7FA"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                SnazzyCustomDark: [{
                    featureType: "administrative",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#8a94ad"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.country",
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#000000"
                    }]
                }, {
                    featureType: "administrative.province",
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#222834"
                    }]
                }, {
                    featureType: "landscape.natural",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{
                        color: "#141824"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.line",
                    elementType: "labels.text",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.station.airport",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.station.airport",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#0f111a"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }]
            };
            t.forEach((t=>{
                const l = t
                  , s = {
                    zoom: 1.4,
                    minZoom: 1.4,
                    zoomControl: !1,
                    scrollwheel: !0,
                    disableDefaultUI: !0,
                    center: new window.google.maps.LatLng(25.659195,30.182691),
                    styles: "dark" === localStorage.getItem("phoenixTheme") ? i.SnazzyCustomDark : i.SnazzyCustomLight
                }
                  , r = new window.google.maps.Map(l,s)
                  , a = new window.google.maps.InfoWindow
                  , o = leaftletPoints.map((e=>{
                    const {name: t, location: i, street: l} = e
                      , s = `\n        <h6 class="mb-1">${t}</h6>\n        <p class="m-0 text-500">${l}, ${i}</p>\n      `
                      , o = new window.google.maps.Marker({
                        position: {
                            lat: e.lat,
                            lng: e.lng
                        }
                    });
                    return o.addListener("click", (()=>{
                        a.setContent(s),
                        a.open(r, o);
                    }
                    )),
                    o
                }
                ))
                  , y = {
                    render: ({count: e, position: t})=>{
                        let i = "#3874ff";
                        e > 10 && (i = "#e5780b"),
                        e > 90 && (i = "#25b003");
                        const l = window.btoa(`\n            <svg fill="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n              <circle cx="120" cy="120" opacity=".9" r="70" />\n              <circle cx="120" cy="120" opacity=".3" r="90" />\n              <circle cx="120" cy="120" opacity=".2" r="110" />\n            </svg>`);
                        return new window.google.maps.Marker({
                            label: {
                                text: String(e),
                                color: "white",
                                fontSize: "10px"
                            },
                            position: t,
                            icon: {
                                url: `data:image/svg+xml;base64,${l}`,
                                scaledSize: new window.google.maps.Size(45,45)
                            },
                            zIndex: Number(window.google.maps.Marker.MAX_ZINDEX) + e
                        })
                    }
                };
                return e && e.addEventListener("clickControl", (({detail: {control: e, value: t}})=>{
                    "phoenixTheme" === e && r.set("styles", "dark" === t ? i.SnazzyCustomDark : i.SnazzyCustomLight);
                }
                )),
                new window.markerClusterer.MarkerClusterer({
                    markers: o,
                    map: r,
                    renderer: y
                })
            }
            ));
        }
    }
    ;

    const {docReady: docReady} = window.phoenix.utils;
    window.revenueMapInit = revenueMapInit,
    docReady(totalSalesChartInit),
    docReady(newCustomersChartsInit),
    docReady(topCouponsChartInit),
    docReady(projectionVsActualChartInit),
    docReady(returningCustomerChartInit),
    docReady(payingCustomerChartInit),
    docReady(totalOrdersChartInit);

}
));
//# sourceMappingURL=ecommerce-dashboard.js.map
