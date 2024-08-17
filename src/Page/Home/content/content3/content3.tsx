import React from "react";
import {Box, Container, Grid} from "@mui/material";
import '../content.scss';
import img from "../../../../Component/images/images";

function Content3() {
    return (
        <Box>
            <Container className="content3">
                <Grid container spacing={3}>
                    <Grid item xs={6} className={'left'}>
                        {/* Nội dung của ô bên trái */}
                    </Grid>
                    <Grid item xs={6} className={'right'}>
                        <img src={img.content3} alt={`content3`} className="images3"/>
                        <div className={"idea"}>Được trồng trọt và chăm chút kỹ lưỡng, nuôi dưỡng từ thổ nhưỡng phì
                            nhiêu, nguồn nước mát lành, bao bọc bởi mây và sương cùng nền nhiệt độ mát mẻ quanh năm,
                            những búp trà ở Tây Bắc mập mạp và xanh mướt, hội tụ đầy đủ dưỡng chất, sinh khí, và tinh
                            hoa đất trời. Chính khí hậu đặc trưng cùng phương pháp canh tác của đồng bào dân tộc nơi đây
                            đã tạo ra Trà Xanh vị mộc dễ uống, dễ yêu, không thể trộn lẫn với bất kỳ vùng miền nào khác.
                        </div>
                        <button>Thử ngay</button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Content3;
