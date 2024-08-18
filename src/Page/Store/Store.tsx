import './Store.scss';
import {Link} from 'react-router-dom';
import storeImages from '../../Component/images/images';
import Box from "@mui/system/Box";
import React from "react";
import {Container, Grid, Paper} from "@mui/material";
import img from "../../Component/images/images";

function Store() {
    return (
        <>

            <div className={"Container"}>

                <div className={"background"}>
                    <img
                        src={storeImages.bgStore}
                        alt="Background"
                        style={{height: '200px', width: '100%', objectFit: 'cover'}}
                    />
                    <div className={"overlay"}></div>
                    {/* Lớp phủ tối */}
                </div>
                <Box>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={2} className={'left4'}>
                                <Paper elevation={3}>
                                    <div>sideBar ở đây</div>
                                </Paper>
                            </Grid>
                            <Grid item xs={10} className={'right4'}>
                                <div className={"wrap-content"}>
                                    <div className={"header"}>
                                        <h3>Chào Mừng Đến Với The Coffee House</h3>
                                    </div>
                                    <div className={"content"}>
                                        <p>
                                            🔶Không đơn thuần chỉ là một chuỗi cà phê phục vụ thức uống chất lượng, thơm
                                            ngon, đi đôi với phong cách và thái độ thân thiện để ghi điểm với cộng đồng
                                            khách hàng. Hơn thế, The Coffee House đã luôn đầu tư và phát triển để mang
                                            lại những giá trị mới đầy ý nghĩa. Vậy nên, ngoài giá trị thương mại, The
                                            Coffee House còn góp phần mang đến những giá trị về tinh thần, văn hóa và
                                            phong cách sống… của người Việt.
                                        </p>
                                        <div className={"image"}>
                                            <img src={storeImages.store2} alt="img1"/>
                                            <br/>
                                            <span>Môi trường "thân thiện"</span>
                                        </div>
                                        <p>
                                            🔶 Câu nói cửa miệng “Đi cà phê nhé!” không chỉ nhằm để thưởng thức cà phê mà
                                            còn là tìm kiếm sự kết nối và sẻ chia giữa mọi người với nhau. Thấu hiểu nhu
                                            cầu đó của các khách hàng, The Coffee House đã tạo nên một không gian thật
                                            thoải mái, vừa năng động lại vừa riêng tư, nhờ đó có thể đưa mọi người đến
                                            gần nhau hơn, kết nối và sẻ chia thân tình bên những tách cà phê, tách trà
                                            đượm vị.
                                        </p>
                                        <div className={"image"}>
                                            <img src={storeImages.store3} alt="img1"/>
                                            <br/>
                                            <span>Kết nối mọi người xích lại gần nhau hơn</span>
                                        </div>
                                        <p>
                                            Trở thành điểm chọn lý tưởng mỗi khi có lời mời gọi đi cà phê, The Coffee
                                            House là nơi nơi khởi đầu của những câu chuyện rôm rả trên bàn cà phê. Từ đó
                                            gắn kết những mối quan hệ, thêm thắm đượm tình cảm. Cũng như một chiếc cầu
                                            nối kết nối những mối quan hệ mới, khởi đầu cho những giá trị khác.
                                        </p>

                                        <p> 🔶 Việt Nam là nước nổi tiếng về cà phê và trà, người Việt Nam quá quen thuộc
                                            và rất yêu thích với hai thức uống này. Để gìn giữ, tôn vinh giá trị của trà
                                            và cà phê Việt không cách nào khác là đem đến những sản phẩm chất lượng,
                                            đượm hương vị tinh tuý đến gần và làm hài lòng những vị khách hàng nội
                                            quốc. </p>
                                        <div className={"image"}>
                                            <img src={storeImages.store4} alt="img1"/>
                                            <br/>
                                            <span>Cà phê chất lượng</span>
                                        </div>
                                        <p>Và hành trình đó đang có sự chung tay, lan toả của The Coffee House. Không
                                            chỉ là nuôi dưỡng tình yêu cà phê và trà của hàng triệu khách hàng, The
                                            Coffee House tiếp tục khơi dậy tình yêu của những nhân viên, những nghệ nhân
                                            pha chế gắn bó với nghề, những người nông dân trồng và cả những người thợ
                                            rang xay, những chuyên gia kiểm tra chất lượng tiếp tục giữ lửa với cà phê
                                            Việt. </p>
                                        <p>
                                            🔶 Không chỉ là một nhịp sống bùng cháy, năng động và đầy cảm hứng khi thưởng
                                            thức hương vị cà phê. The Coffee House còn truyền cảm hứng về lối sống hiện
                                            đại, tiếp cận và bắt nhịp với những văn hoá mới, phong cách mới đầy trẻ
                                            trung đang du nhập vào Việt Nam.


                                        </p>
                                        <div className={"image"}>
                                            <img src={storeImages.store1} alt="img1"/>
                                            <br/>
                                            <span>Không gian hiện đại</span>
                                        </div>
                                        <p>The Coffee House mang đến cho người Việt, đặc biệt là các bạn trẻ với lối
                                            sống hiện đại, bắt kịp xu hướng thế giới, dám trải nghiệm những điều thú vị
                                            và học hỏi từ những nơi phát triển. Cũng chính vì vậy mà sự cảm nhận về
                                            hương vị cà phê tại The Coffee House sẽ trở nên đa dạng, phong phú hơn rất
                                            nhiều khi chào đón những hương vị cà phê trên toàn thế giới. Đó là các kiểu
                                            cà phê kiểu Ý đặc sắc như Cappuccino, Latte, Macchiato, Mocha...; cà phê
                                            được rang xay tại chỗ hoặc các loại thức uống đậm chất sáng tạo và đầy mới
                                            lạ thay vì chỉ gói gọn trong những loại thức uống cà phê truyền thống như cà
                                            phê đen đá, cà phê sữa, bạc sỉu…

                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
        </>
    );
}

export default Store;
