import React from 'react';

export default function Footer() {
    return (
        <>
            <hr className="solid" />

            <div className="d-flex justify-content-center m-2 text-center">
                Disclaimer: All decisions made will be final and will be under the
                sole discretion of Bajaj Finserv Ltd.
            </div>
            <div className="copyright py-4 text-center text-white">
                <div className="container">
                    <small
                    ><a
                        href="/cdn-cgi/l/email-protection#6c4c1f191c1c031e182c040d0f071e14420502"
                        className="text-light"
                    ><span
                        className="__cf_email__"
                        data-cfemail="4d3e383d3d223f390d252c2e263f35632423"
                    >[email&#160;protected]</span
                            ></a
                        >
                        | 2021, Bajaj Finserv Limited.</small
                    >
                </div>
            </div>
        </>
    );
}